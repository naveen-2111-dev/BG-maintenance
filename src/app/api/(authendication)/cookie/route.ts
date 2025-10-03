import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    try {
        const { role } = await request.json();
        const cookieName = role === "admin" ? "admin-token" : "member-token";

        const cookie = (await cookies()).get(cookieName);

        return NextResponse.json({ success: true, data: cookie });
    } catch (error) {
        console.error("Logout error:", error);
        return NextResponse.json({ success: false, data: null }, { status: 500 });
    }
}
