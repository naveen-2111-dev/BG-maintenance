import type { Metadata } from "next";
import "../../globals.css";

import { redirect } from "next/navigation";
import { getAdminProfile } from "@/hooks/profile/useAdminProfile";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "dashboard",
    description: "Member Dashboard",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { isAdminLogin } = await getAdminProfile();

    if (isAdminLogin) {
        redirect("/admin");
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
