"use client";

import { Payment } from "@/app/api/(dashboard)/(admin)/add-fee/route";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Cookie } from "@/hooks/profile/getcookies";
import { useEffect, useState } from "react";

const PendingUsersTable = ({ selectedMonth }: { selectedMonth: string | null }) => {
    const [Pending, setPending] = useState<any[]>([]); // eslint-disable-line @typescript-eslint/no-explicit-any
    const [total, setTotal] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!selectedMonth) return;

        const handlePending = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/unpaid-users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": `Bearer ${await Cookie({ role: "admin" })}`,
                    },
                    body: JSON.stringify({ month: selectedMonth.toLowerCase().trim() }),
                });

                const data = await res.json();
                if (data.success && data.data.existingFees.length > 0) {
                    setPending(data.data.existingFees);
                    setTotal(data.data.totalUnpaid[0].totalAmount);
                } else {
                    setPending([]);
                    setTotal(0);
                }
            } catch (err) {
                console.error(err);
                setPending([]);
                setTotal(0);
            } finally {
                setLoading(false);
            }
        };

        handlePending();
    }, [selectedMonth]);

    return (
        <div className="mt-10">
            {loading && (
                <p className="text-center text-lg font-semibold">Loading pending users...</p>
            )}

            {!loading && !selectedMonth && (
                <p className="text-center text-xl">Please select month</p>
            )}

            {!loading && selectedMonth && Pending.length === 0 && (
                <p className="text-center text-xl text-green-600">
                    Huray! All payments received 🎉
                </p>
            )}

            {!loading && Pending.length > 0 && (
                <Table>
                    <TableCaption>
                        A list of BG&apos;s {selectedMonth} Overdue users.
                    </TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Member</TableHead>
                            <TableHead>Plot no.</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Pending Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Pending.map((pending) =>
                            pending.payment.map((val: Payment, i: number) => (
                                <TableRow key={`${pending._id}-${i}`}>
                                    <TableCell className="font-medium">{pending.name}</TableCell>
                                    <TableCell>{pending.plotno}</TableCell>
                                    <TableCell>{pending.phone}</TableCell>
                                    <TableCell>{val.amount}</TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell>{total}</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            )}
        </div>
    );
};

export default PendingUsersTable;
