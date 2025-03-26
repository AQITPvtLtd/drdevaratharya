import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import Statistics from './Statistics';

const Explore = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 mt-20'>
            <div className='lg:grid lg:grid-cols-12 gap-10 items-center flex flex-col-reverse'>

                {/* Left Section */}
                <div className='lg:col-span-6'>
                    <span className='bg-[#f8fcf4] px-4 py-2 rounded-md text-sm font-medium'>What We Do</span>
                    <h2 className='mt-4 font-semibold text-4xl md:text-5xl leading-tight'>Various Forms of Cancer</h2>
                    <p className='mt-4 text-gray-700'>
                        Various cancers affect the body differently, requiring personalized care, early detection, and advanced treatments for better outcomes.
                    </p>

                    {/* Cancer List */}
                    <div className='grid sm:grid-cols-2 gap-4 mt-6'>
                        <ul className='space-y-3'>
                            <li className='flex items-center gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Lung Cancer</li>
                            <li className='flex items-center gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Cervical Cancer</li>
                            <li className='flex items-center gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Prostate Cancer</li>
                            <li className='flex items-center gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Mouth and Oral Cancer</li>
                            <li className='flex items-center gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Colorectal Cancer</li>
                        </ul>
                        <ul className='space-y-3'>
                            <li className='flex items-center gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Blood Cancer</li>
                            <li className='flex items-center gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Brain Cancer</li>
                            <li className='flex items-center gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Bone Cancer</li>
                            <li className='flex items-center gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-xl' />Breast Cancer</li>
                        </ul>
                    </div>

                    {/* Contact Button */}
                    <Link href="/" className='mt-6 inline-flex items-center gap-2 bg-[#fa3e93] text-white px-5 py-3 rounded-md text-lg font-semibold border-2 border-[#fa3e93] transition duration-300 hover:bg-white hover:text-[#fa3e93]'>
                        Contact us <MdOutlineArrowOutward className='text-xl' />
                    </Link>
                </div>

                {/* Right Section (Image) */}
                <div className='lg:col-span-6 flex justify-center'>
                    <Image
                        className='rounded-md'
                        src='/explore/bg03-600x500.jpg'
                        width={600}
                        height={500}
                        alt='Cancer Types'
                    />
                </div>
            </div>
            {/* Statistics Component */}
            <Statistics />
        </div>
    );
};

export default Explore;