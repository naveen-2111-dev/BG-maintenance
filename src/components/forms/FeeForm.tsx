"use client";

import React, { useState } from 'react'
import SelectMonthDialog from '../dialog/SelectMonthDialog'
import { Button } from '../ui/button';

const FeeForm = () => {
    const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

    return (
        <div className='p-5'>
            <form className='w-screen max-w-lg min-w-sm'>
                <div className='flex justify-between items-center mb-6'>
                    <h2 className="text-xl mb-4">Add Fee [Layout Member]</h2>
                    <SelectMonthDialog selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="name">Member Name</label>
                    <input className="border border-gray-300 p-2 w-full rounded-md" type="text" id="name" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="plotno">Plot no.</label>
                    <input className="border border-gray-300 p-2 w-full rounded-md" type="text" id="plotno" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone Number</label>
                    <input className="border border-gray-300 p-2 w-full rounded-md" type="text" id="phone" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="event-name">Amount ₹</label>
                    <input className="border border-gray-300 p-2 w-full rounded-md" type="number" id="event-name" />
                </div>

                <Button variant="default" type="button">Submit</Button>
            </form>
        </div>
    )
}

export default FeeForm
