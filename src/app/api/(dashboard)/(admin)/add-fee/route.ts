import { withAuth } from "@/lib/middleware/adminauth";
import { GetCollection } from "@/lib/mongodb/link";
import { NextRequest, NextResponse } from "next/server";

export interface Payment {
    month: string;
    amount: number;
    status: string;
    paidOn: Date;
}

export interface FeeDocument {
    name: string;
    plotno: string;
    phone: string;
    payment: Payment[];
    createdBy?: string;
}

export const POST = withAuth(async (req: NextRequest, user) => {
    try {
        const { month, name, status, amount, plotno, phone } = await req.json();

        if (!name || !status || !amount || !plotno || !phone || !month) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const collection = await GetCollection<FeeDocument>("fees");

        const userDoc = await collection.findOne({ phone });

        if (!userDoc) {
            await collection.insertOne({
                name,
                plotno,
                phone,
                payment: [],
                createdBy: user.email
            });
        }

        const updateResult = await collection.updateOne(
            { phone, "payment.month": month },
            {
                $set: {
                    "payment.$.status": status,
                    "payment.$.amount": amount,
                    "payment.$.paidOn": new Date()
                }
            }
        );

        if (updateResult.matchedCount === 0) {
            await collection.updateOne(
                { phone },
                {
                    $push: {
                        payment: {
                            month,
                            amount,
                            status,
                            paidOn: new Date()
                        }
                    }
                }
            );
        }

        return NextResponse.json({ message: "Fee added/updated successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to add/update fee", details: String(error) }, { status: 500 });
    }
});
