"use client";

import React from 'react'
import { Button } from '../ui/button';

const AddMember = () => {
    return (
        <div className='p-5'>
            <form className='w-screen max-w-lg min-w-sm'>
                <div className='flex justify-between items-center mb-6'>
                    <h2 className="text-xl mb-4">Add Member</h2>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="title">Member Name</label>
                    <input className="border border-gray-300 p-2 w-full rounded-md" type="text" id="title" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="position">Position</label>
                    <input className="border border-gray-300 p-2 w-full rounded-md" type="text" id="position" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone</label>
                    <input className="border border-gray-300 p-2 w-full rounded-md" type="text" id="phone" />
                </div>

                <Button variant="default" type="button">Submit</Button>
            </form>
        </div>
    )
}

export default AddMember
