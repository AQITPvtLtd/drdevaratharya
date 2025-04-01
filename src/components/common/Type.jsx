import React from 'react'
import Link from 'next/link';
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { data } from '@/data/typeofcancer';
const Type = () => {
    return (
        <div className='px-5'>
            <div className="shadow-2xl bg-white px-4 py-4 rounded-lg w-auto h-fit mt-10 lg:mt-0">
                <h2 className="text-xl font-semibold mb-4 dark:text-black">Types of cancer</h2>
                <ul className="space-y-2">
                    {data.map((a) => (
                        <li key={a.id}>
                            <Link href={`${a.path}`}>
                                <span className="cursor-pointer text-blue-500 hover:underline flex gap-2">
                                    <FaArrowRightFromBracket className='mt-1' /> {a.title}
                                </span>
                            </Link> 
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Type