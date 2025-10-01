"use client";

import React, { useState } from 'react'
import SelectMonthDialog from '../dialog/SelectMonthDialog'
import { Button } from '../ui/button';

const ExpenseForm = () => {
    const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

    return (
        <div className='p-5'>
            <form className='w-screen max-w-lg min-w-sm'>
                <div className='flex justify-between items-center mb-6'>
                    <h2 className="text-xl mb-4">Add Expense</h2>
                    <SelectMonthDialog selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="title">Event Name</label>
                    <input className="border border-gray-300 p-2 w-full rounded-md" type="text" id="title" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="date">Date</label>
                    <input className="border border-gray-300 p-2 w-full rounded-md" type="date" max={new Date().toISOString().split("T")[0]} id="date" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="category">Category</label>
                    <input className="border border-gray-300 p-2 w-full rounded-md" type="text" id="category" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="event-name">Amount Spent ₹</label>
                    <input className="border border-gray-300 p-2 w-full rounded-md" type="number" id="event-name" />
                </div>

                <Button variant="default" type="button">Submit</Button>
            </form>
        </div>
    )
}

export default ExpenseForm
