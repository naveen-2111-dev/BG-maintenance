import { withAuth } from "@/lib/middleware/adminauth";
import { GetCollection } from "@/lib/mongodb/link";
import { NextRequest, NextResponse } from "next/server";

export const POST = withAuth(async (req: NextRequest, user) => {
    try {
        const { month, eventname: title, date, category, amountspent: amount } = await req.json();

        if (!title || !date || !category || !amount) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const collection = await GetCollection("expenses");

        await collection.insertOne({
            month,
            title,
            amount,
            category,
            date: new Date(date),
            createdBy: user.email
        });

        return NextResponse.json({ message: "Expense added successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to add expense", details: String(error) }, { status: 500 });
    }
});
