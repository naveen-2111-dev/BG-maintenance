import { withAuth } from "@/lib/middleware/adminauth";
import { GetCollection } from "@/lib/mongodb/link";
import { NextRequest, NextResponse } from "next/server";

export const POST = withAuth(async (req: NextRequest, user) => {
    try {
        const { name, phone, role } = await req.json();

        if (!name || !phone || !role) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const collection = await GetCollection("member");

        const existing = await collection.findOne({ phone });
        if (existing) {
            return NextResponse.json({
                error: "Member with this phone number already exists", data: {
                    existingMember: existing
                }
            }, { status: 409 });
        }

        await collection.insertOne({
            name,
            phone,
            role,
            joinedOn: new Date(),
            createdBy: user.email
        });

        return NextResponse.json({ message: "Member added successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to add member", details: String(error) }, { status: 500 });
    }
});
