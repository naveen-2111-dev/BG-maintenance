import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export type JwtPayloadType = {
    email: string;
    iat: number;
    exp: number;
};

const SECRET_KEY = process.env.JWT_SECRET!;

function verifyJwt(req: NextRequest) {
    const authHeader = req.headers.get("authorization");
    if (!authHeader) throw new Error("Authorization header missing");

    const token = authHeader.split(" ")[1];
    return jwt.verify(token, SECRET_KEY);
}

export function withAuth(handler: (req: NextRequest, user: JwtPayloadType) => Promise<NextResponse>) {
    return async (req: NextRequest) => {
        try {
            const decoded = verifyJwt(req) as JwtPayloadType;

            return await handler(req, decoded);
        } catch (err) {
            return NextResponse.json({ error: err || "Unauthorized" }, { status: 401 });
        }
    };
}
