import React from 'react'
import Image from 'next/image';
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";

const Explore = () => {
    return (
        <div className='max-w-full mx-20 grid lg:grid-cols-12 mt-20'>
            <div className='md:col-span-6 col-end-4'>
                <span className='bg-[#f8fcf4] p-2 rounded-md'>What We Do</span>
                <p className='mt-2 font-semibold text-5xl p-2'>Explore Oncology
                    Departments</p>
                <div className='flex gap-2 mt-5'><span className='bg-[#fa3e93] text-white font-bold p-1 px-2 text-3xl rounded-md'>O</span><p>ncology Enthusiastically mesh long-term high-impact infrastructures vis-a-vis efficient customer service leadership rather than experiences.</p></div>
                <div className='md:flex block gap-30 mt-5'>
                    <div className='list-none'>
                        <div className='flex gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-2xl' /><li>Radiation Oncology</li></div>
                        <div className='flex gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-2xl' /><li>Chemotherapy</li></div>
                        <div className='flex gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-2xl' /><li>Breast Cancer Diagnosis</li></div>
                    </div>
                    <div className='list-none'>
                        <div className='flex gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-2xl' /><li>Facilities and Equipment</li></div>
                        <div className='flex gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-2xl' /><li>Medical Consulting</li></div>
                        <div className='flex gap-2'><IoCheckmarkCircle className='text-[#fa3e93] text-2xl' /><li>Cancer Treatment</li></div>
                    </div>
                </div>

                <div className='mt-10'>
                    <button className='bg-[#fa3e93] text-white border-2 border-[#fa3e93] rounded-md px-10 py-3 font-semibold hover:bg-white hover:text-black'><span className='flex'>Learn More<MdOutlineArrowOutward /></span></button>
                </div>
            </div>

            <div className='md:col-span-6 col-end-4'>
                <Image className='rounded-md' src='/explore/bg03-600x500.jpg' width={1000} height={1000} style={{ maxWidth: '600px', height: 'auto' }} alt='' />
            </div>
        </div>
    )
}

export default Explore