import type { Metadata } from "next";
import "../../globals.css";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "dashboard",
    description: "Member Dashboard",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies();
    const token = cookieStore.get("member-token");

    if (token) {
        redirect("/");
    }

    return (
        <html lang="en">
            <body>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}
