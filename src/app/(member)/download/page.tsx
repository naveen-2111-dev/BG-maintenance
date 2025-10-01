"use client";

import SelectMonthDialog from '@/components/dialog/SelectMonthDialog'
import React, { useState } from 'react'

const Page = () => {
    const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

    return (
        <div className="w-screen p-5 flex flex-col gap-5 items-start">
            <h1 className='text-xl'>Download PDF</h1>
            <SelectMonthDialog selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
        </div>
    )
}

export default Page
