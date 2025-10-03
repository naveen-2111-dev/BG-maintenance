import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    try {
        const { role } = await request.json();
        const cookieName = role === "admin" ? "admin-token" : "member-token";

        (await cookies()).delete(cookieName);

        return NextResponse.json({ success: true, message: "Logged out", data: cookieName });
    } catch (error) {
        console.error("Logout error:", error);
        return NextResponse.json({ success: false, message: "Logout failed" }, { status: 500 });
    }
}
