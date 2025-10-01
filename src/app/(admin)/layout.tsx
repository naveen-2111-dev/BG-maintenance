import type { Metadata } from "next";
import "../globals.css";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import { redirect } from "next/navigation";
import { getAdminProfile } from "@/hooks/profile/useAdminProfile";
import AdminSidebar from "@/components/sidebar/Admin-sidebar";

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

    if (!isAdminLogin) {
        redirect("/as-admin");
    }

    return (
        <html lang="en">
            <body>
                <SidebarProvider>
                    <AdminSidebar />
                    <main>
                        <SidebarTrigger />
                        {children}
                    </main>
                </SidebarProvider>
            </body>
        </html>
    );
}
