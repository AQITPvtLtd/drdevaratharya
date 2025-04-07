"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import Statistics from './Statistics';
import { motion } from 'framer-motion';

const Explore = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 mt-20'>
            <div className='lg:grid lg:grid-cols-12 gap-10 items-center flex flex-col-reverse'>

                {/* Left Section (Text) */}
                <motion.div
                    className='lg:col-span-6'
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <h2 className='mt-4 font-semibold text-4xl md:text-5xl leading-tight dark:text-black' style={{ fontFamily: "Roboto Slab, serif" }}>Various Forms of Cancer</h2>
                    <p className='mt-4 text-gray-700'>
                        Various cancers affect the body differently, requiring personalized care, early detection, and advanced treatments for better outcomes.
                    </p>

                    {/* Cancer List */}
                    <div className='grid sm:grid-cols-2 gap-4 mt-6'>
                        <ul className='space-y-3 dark:text-black'>
                            <li className='flex items-center gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Lung Cancer</li>
                            <li className='flex items-center gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Cervical Cancer</li>
                            <li className='flex items-center gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Prostate Cancer</li>
                            <li className='flex items-center gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Mouth and Oral Cancer</li>
                            <li className='flex items-center gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Colorectal Cancer</li>
                        </ul>
                        <ul className='space-y-3 dark:text-black'>
                            <li className='flex items-center gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Blood Cancer</li>
                            <li className='flex items-center gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Brain Cancer</li>
                            <li className='flex items-center gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Bone Cancer</li>
                            <li className='flex items-center gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Breast Cancer</li>
                        </ul>
                    </div>

                    {/* Contact Button */}
                    <Link href="/contact" className='mt-6 inline-flex items-center gap-2 bg-[#fa3e93] text-white px-5 py-3 rounded-md text-lg font-semibold border-2 border-[#fa3e93] transition duration-300 hover:bg-white hover:text-[#fa3e93]'>
                        Contact us <MdOutlineArrowOutward className='text-xl' />
                    </Link>
                </motion.div>

                {/* Right Section (Image) */}
                <motion.div
                    className='lg:col-span-6 flex justify-center'
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <Image
                        className='rounded-md'
                        src='/explore/bg03-600x500.jpg'
                        width={600}
                        height={500}
                        alt='Cancer Types'
                    />
                </motion.div>
            </div>

            {/* Statistics Section (Bottom to top) */}
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.5 }}
            >
                <Statistics />
            </motion.div>
        </div>
    );
};

export default Explore;
