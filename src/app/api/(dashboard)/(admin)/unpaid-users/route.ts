import { withAuth } from "@/lib/middleware/adminauth";
import { GetCollection } from "@/lib/mongodb/link";
import { NextRequest, NextResponse } from "next/server";

export const POST = withAuth(async (req: NextRequest, user) => {
    try {
        const { month } = await req.json();
        const collection = await GetCollection("fees");

        const existing = await collection.aggregate([
            {
                $match: {
                    $or: [
                        { payment: { $elemMatch: { month: month, status: "unpaid" } } },
                    ]
                }
            },
            {
                $project: {
                    name: 1,
                    plotno: 1,
                    phone: 1,
                    createdBy: 1,
                    payment: {
                        $filter: {
                            input: "$payment",
                            as: "p",
                            cond: { $eq: ["$$p.month", month] }
                        }
                    }
                }
            }
        ]).toArray();

        const totalUnpaid = await collection.aggregate([
            {
                $unwind: "$payment"
            },
            {
                $match: {
                    "payment.month": "february",
                    "payment.status": "unpaid"
                }
            },
            {
                $group: {
                    _id: null,
                    totalAmount: { $sum: "$payment.amount" },
                    count: { $sum: 1 }
                }
            }
        ]).toArray();

        if (existing.length > 0) {
            return NextResponse.json({
                success: true,
                message: "Unpaid users found",
                data: { existingFees: existing, totalUnpaid: totalUnpaid }
            }, { status: 200 });
        }

        return NextResponse.json({ message: "No unpaid fees found", success: false }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error, success: false }, { status: 500 });
    }
});

