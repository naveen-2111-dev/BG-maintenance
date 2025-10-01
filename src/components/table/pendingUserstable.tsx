import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const expenses = [
    {
        expense: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        expense: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        expense: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        expense: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        expense: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        expense: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        expense: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]

const PendingUsersTable = ({ selectedMonth }: { selectedMonth: string | null }) => {
    return (
        <Table>
            <TableCaption>A list of BG&apos;s {selectedMonth} Overdue users.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Member</TableHead>
                    <TableHead>plot no.</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Pending Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {expenses.map((expense) => (
                    <TableRow key={expense.expense}>
                        <TableCell className="font-medium">{expense.expense}</TableCell>
                        <TableCell>{expense.paymentStatus}</TableCell>
                        <TableCell>{expense.paymentMethod}</TableCell>
                        <TableCell>{expense.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell>$2,500.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}

export default PendingUsersTable;