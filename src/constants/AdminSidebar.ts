import { BadgeIndianRupee, LucideIcon, PersonStanding, PlusSquare, Users2 } from "lucide-react";

export interface AdminSidebarComponentType {
    id: number;
    title: string;
    icon: LucideIcon;
    url: string;
}

export const AdminSidebarComponents: AdminSidebarComponentType[] = [
    {
        id: 1,
        title: "Add Expense",
        icon: PlusSquare,
        url: "/add-expense"
    },
    {
        id: 2,
        title: "Add Fee",
        icon: BadgeIndianRupee,
        url: "/add-fee"
    }, {
        id: 3,
        title: "Add Member",
        icon: Users2,
        url: "/add-member"
    }, {
        id: 4,
        title: "Pending Fee",
        icon: PersonStanding,
        url: "/admin"
    }
]