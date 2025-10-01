import { Bitcoin, LucideIcon, ReceiptPoundSterling, Users2 } from "lucide-react";

export interface SidebarComponentType {
    id: number;
    title: string;
    icon: LucideIcon;
    url: string;
}

export const SidebarComponents: SidebarComponentType[] = [
    {
        id: 1,
        title: "Monthly Expense",
        icon: Bitcoin,
        url: "/expenses"
    },
    {
        id: 2,
        title: "Download PDF",
        icon: ReceiptPoundSterling,
        url: "/download"
    }, {
        id: 3,
        title: "Members List",
        icon: Users2,
        url: "/leads"
    }
]