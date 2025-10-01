"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"
import React from "react"

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]

function SelectMonthDialog({ selectedMonth, setSelectedMonth }: { selectedMonth: string | null; setSelectedMonth: React.Dispatch<React.SetStateAction<string | null>>; }) {

    return (
        <Dialog>
            <DialogTrigger>
                <Button type="button" variant="outline" className="w-auto">
                    {selectedMonth || "Select Month"}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Select Month</DialogTitle>
                    <DialogDescription>
                        Choose the month for which you want to view expenses.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-3 gap-2 mt-4">
                    {months.map((month) => (
                        <DialogClose asChild key={month}>
                            <Button
                                type="button"
                                variant={selectedMonth === month ? "secondary" : "default"}
                                onClick={() => setSelectedMonth(month)}
                                className="w-full"
                            >
                                {month}
                            </Button>
                        </DialogClose>
                    ))}
                </div>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default SelectMonthDialog
