import React from 'react';
import Image from 'next/image';
import { MdOutlineArrowOutward } from "react-icons/md";

const Banner = () => {
    return (
        <div className='w-full bg-black text-white py-10 px-5'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
                {/* Text Content */}
                <div className='lg:col-span-6 text-center lg:text-left space-y-5'>
                    <p className='text-lg font-semibold'>#1 Oncology Medical</p>
                    <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
                        Genuine <br /> Treatments <br /> for Your Health.
                    </h1>
                    <p className='text-base md:text-lg'>
                        Explore our website today and discover how we can partner with you on your journey to better health.
                    </p>
                    <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4'>
                        <button className='bg-white text-black rounded-lg px-6 py-3 font-semibold flex items-center gap-2 hover:text-white hover:bg-blue-500 transition-all'>
                            Learn More <MdOutlineArrowOutward />
                        </button>
                        <button className='bg-transparent text-white border-2 border-white rounded-lg px-6 py-3 font-semibold flex items-center gap-2 hover:text-black hover:bg-white transition-all'>
                            Contact Us <MdOutlineArrowOutward />
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className='lg:col-span-6 w-full'>
                    <Image src='/banner/slider02.jpg' width={1000} height={1000} alt='Banner Image' className='w-full h-full object-cover' />
                </div>
            </div>
        </div>
    );
}

export default Banner;
