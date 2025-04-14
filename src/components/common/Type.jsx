"use client";
import React from 'react'
import Link from 'next/link';
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { data } from '@/data/typeofcancer';
import { motion } from 'framer-motion';

const Type = () => {
    const listItem = {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    };

    const listContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    return (
        <div className='px-5'>
            <div className="shadow-2xl bg-white px-4 py-4 rounded-lg w-auto h-fit mt-10 lg:mt-0">
                <h2 className="text-xl font-semibold mb-4 dark:text-black">Types of cancer</h2>

                <motion.ul
                    className="space-y-2"
                    variants={listContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                >
                    {data.map((a) => (
                        <motion.li key={a.id} variants={listItem}>
                            <Link href={`${a.path}`}>
                                <span className="cursor-pointer text-blue-500 hover:underline flex gap-2">
                                    <FaArrowRightFromBracket className='mt-1' /> {a.title}
                                </span>
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
                <div className="pt-3">
                    <Link
                        href={`/contact`}
                        className="px-4 py-2 bg-[#ef1a76] text-white text-md rounded-lg block text-center transition-all border-2 border-transparent hover:border-[#ef1a76] hover:text-black hover:bg-white"
                    >
                        Book Your Appointment
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Type