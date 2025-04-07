'use client';
import { items } from '@/data/services';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { motion } from 'framer-motion';

const headingVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const listContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const listItem = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const ServiceData = ({ id }) => {
    const data = items.find((a) => a.id == id);

    if (!data) {
        return <p className="text-center text-red-500">Service not found!</p>;
    }

    return (
        <div className="mx-auto px-4 py-8">
            <div className="flex flex-col items-center">
                {/* Image Section */}
                <div className="w-full max-w-8xl relative">
                    <Image
                        src={data.image}
                        width={1000}
                        height={350}
                        className="w-full object-cover rounded-lg shadow-lg lg:h-[300px] h-[200px]"
                        alt="Service Image"
                    />
                </div>

                <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8 w-full max-w-6xl">
                    {/* Content Section */}
                    <div className="relative bg-white px-6 py-8 shadow-xl rounded-2xl text-center col-span-9 lg:-mt-52">
                        <motion.h1
                            className="font-extrabold text-2xl md:text-3xl text-[#f01b77] underline mb-4"
                            style={{ fontFamily: "Roboto Slab, serif" }}
                            variants={headingVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {data.title}
                        </motion.h1>
                        <div className="text-lg text-gray-700 space-y-4 text-left">
                            {data.content.map((item, index) => (
                                <div key={index} dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                        </div>
                    </div>

                    {/* Sidebar Section */}
                    <div className="shadow-2xl sticky top-20 bg-white px-4 py-4 rounded-lg col-span-3 w-auto h-fit mt-10 lg:mt-0">
                        <h2 className="text-xl font-semibold mb-4 dark:text-black" style={{ fontFamily: "Roboto Slab, serif" }}>
                            Other Services
                        </h2>
                        <motion.ul
                            className="space-y-2"
                            variants={listContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.4 }}
                        >
                            {items.map((a) => (
                                <motion.li key={a.id} variants={listItem}>
                                    <Link href={`${a.id}`}>
                                        <span className="cursor-pointer text-blue-500 hover:underline flex gap-2">
                                            <FaArrowRightFromBracket className='mt-1' /> {a.title}
                                        </span>
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceData;
