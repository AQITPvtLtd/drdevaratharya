import React from 'react'
import Image from 'next/image';
import { MdOutlineArrowOutward } from "react-icons/md";

const Banner = () => {
    return (
        <div>
            <div className='max-w-full grid lg:grid-cols-12'>
                <div className='bg-black col-span-6 md:order-[1] order-[2]'>
                    <p className='text-white font-semibold text-xl p-2'>#1 Oncology Medical</p>
                    <p className='text-white font-semibold text-5xl p-5'>Genuine <br /> Treatments <br /> of your Health.</p>
                    <p className='text-white p-5'>Explore our website today and discover how we can partner with you on your journey to better health.</p>
                    <div className='space-x-5 p-5'>
                        <button className='bg-white rounded-lg border-2 px-10 py-3 font-semibold'><span className='flex'>Learn More<MdOutlineArrowOutward /></span></button>
                        <button className='bg-black text-white rounded-lg border-2 border-white px-10 py-3 font-semibold gap-5'><span className='flex'>Contact Us<MdOutlineArrowOutward /></span></button>
                    </div>
                </div>
                <div className='col-span-6 md:order-[2] order-[1]'>
                    <Image src='/banner/slider02.jpg' width={1000} height={1000} alt='' className='w-full' />
                </div>
            </div>
        </div>
    )
}

export default Banner