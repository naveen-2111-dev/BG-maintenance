"use client";

import SelectMonthDialog from '@/components/dialog/SelectMonthDialog';
import PendingUsersTable from '@/components/table/pendingUserstable'
import React, { useState } from 'react'

const Page = () => {
    const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

    return (
        <div className='w-screen max-w-lg min-w-sm p-5'>
            <div className='flex justify-between items-center mb-6'>
                <h2 className="text-xl mb-4">Pending Payment Users</h2>
                <SelectMonthDialog selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
            </div>
            <PendingUsersTable selectedMonth={selectedMonth} />
        </div>
    )
}

export default Page
