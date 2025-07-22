"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import Statistics from './Statistics';
import { motion } from 'framer-motion';
import useIsLargeScreen from '@/hooks/useIsLargeScreen'; // make sure this path is correct

const Explore = () => {
    const isLargeScreen = useIsLargeScreen();
    const MotionWrapper = isLargeScreen ? motion.div : 'div';

    return (
        <div className='max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 mt-20'>
            <div className='lg:grid lg:grid-cols-12 gap-10 items-center flex flex-col-reverse'>

                {/* Left Section (Text) */}
                <MotionWrapper
                    className='lg:col-span-6'
                    {...(isLargeScreen && {
                        initial: { opacity: 0, x: -80 },
                        whileInView: { opacity: 1, x: 0 },
                        transition: { duration: 0.8, ease: 'easeOut' },
                        viewport: { once: false, amount: 0.5 }
                    })}
                >
                    <h2 className='mt-4 font-semibold text-4xl md:text-5xl leading-tight dark:text-black' style={{ fontFamily: "Roboto Slab, serif" }}>
                        Various Forms of Cancer
                    </h2>
                    <p className='mt-4 text-gray-700'>
                        Various cancers affect the body differently, requiring personalized care, early detection, and advanced treatments for better outcomes.
                    </p>

                    {/* Cancer List */}
                    <div className='grid sm:grid-cols-2 gap-4 mt-6'>
                        <ul className='space-y-3 dark:text-black'>
                            <Link href={`/typeofcancer/lung-cancer`} className='flex items-center gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Lung Cancer</Link>
                            <Link href={`/typeofcancer/cervical-cancer`} className='flex items-center gap-2'> <IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Cervical Cancer</Link>
                            <Link href={`/typeofcancer/prostate-cancer`} className='flex items-center gap-2'> <IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Prostate Cancer</Link>
                            <Link href={`/typeofcancer/mouth-cancer`} className='flex items-center gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Mouth and Oral Cancer</Link>
                            <Link href={`/typeofcancer/colorectal-cancer`} className='flex items-center gap-2'> <IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Colorectal Cancer</Link>
                        </ul>
                        <ul className='space-y-3 dark:text-black'>
                            <Link href={`/typeofcancer/blood-cancer`} className='flex items-center gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Blood Cancer</Link>
                            <Link href={`/typeofcancer/brain-cancer`} className='flex items-center gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Brain Cancer</Link>
                            <Link href={`/typeofcancer/bone-cancer`} className='flex items-center gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Bone Cancer</Link>
                            <Link href={`/typeofcancer/breast-cancer`} className='flex items-center gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Breast Cancer</Link>
                        </ul>
                    </div>

                    {/* Contact Button */}
                    <Link href="/contact" className='mt-6 inline-flex items-center gap-2 bg-[#fa3e93] text-white px-5 py-3 rounded-md text-lg font-semibold border-2 border-[#fa3e93] transition duration-300 hover:bg-white hover:text-[#fa3e93]'>
                        Book Now <MdOutlineArrowOutward className='text-xl' />
                    </Link>
                </MotionWrapper>

                {/* Right Section (Image) */}
                <MotionWrapper
                    className='lg:col-span-6 flex justify-center'
                    {...(isLargeScreen && {
                        initial: { opacity: 0, x: 80 },
                        whileInView: { opacity: 1, x: 0 },
                        transition: { duration: 0.8, ease: 'easeOut' },
                        viewport: { once: false, amount: 0.5 }
                    })}
                >
                    <Image
                        className='rounded-md'
                        src='/explore/bg03-600x500.jpg'
                        width={600}
                        height={500}
                        alt='Cancer Types'
                    />
                </MotionWrapper>
            </div>

            {/* Statistics Section */}
            <MotionWrapper
                {...(isLargeScreen && {
                    initial: { opacity: 0, y: 80 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.8, ease: 'easeOut' },
                    viewport: { once: false, amount: 0.5 }
                })}
            >
                <Statistics />
            </MotionWrapper>
        </div>
    );
};

export default Explore;
