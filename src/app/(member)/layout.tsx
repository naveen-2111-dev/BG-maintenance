import type { Metadata } from "next";
import "../globals.css";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/sidebar/App-sidebar";
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

    if (!token) {
        redirect("/login");
    }

    return (
        <html lang="en">
            <body>
                <SidebarProvider>
                    <AppSidebar />
                    <main>
                        <SidebarTrigger />
                        {children}
                    </main>
                </SidebarProvider>
            </body>
        </html>
    );
}
