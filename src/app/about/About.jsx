import React from 'react';
import VisionAndmission from './Visionandmission';
import Image from 'next/image';
import Content from './Content';
import Statistics from '@/components/homepage/Statistics';
import Faq from './Faq';

const About = () => {
    return (
        <div className="px-4 md:px-8">
            <div className='grid grid-cols-1 md:grid-cols-12 items-center gap-6'>
                <div className='md:col-span-5 flex justify-center mt-5'>
                    <Image
                        src="/about/drdevavrat.png"
                        width={500}
                        height={500}
                        className="w-full max-w-[350px] lg:max-w-[400px] xl:max-w-[500px] rounded-lg shadow-lg"
                        alt="About Us"
                    />
                </div>
                <div className='md:col-span-7 flex justify-center'>
                    <div className="bg-gray-400 p-4 w-full max-w-xl md:max-w-2xl lg:max-w-3xl">
                        <div className="bg-white p-4">
                            <div className="bg-gray-400 p-3 lg:p-6">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-3 text-black" style={{ fontFamily: "Roboto Slab, serif" }}>
                                    Dr. Devavrat Arya
                                </h2>
                                <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-black" style={{ fontFamily: "Roboto Slab, serif" }}>
                                    Senior Director
                                </h3>
                                <div className='flex gap-2'>
                                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-2 text-gray-900" style={{ fontFamily: "Roboto Slab, serif" }}>
                                        Max Super Speciality Hospital
                                    </h2>
                                </div>
                                <div className="border-[#ef1a76] border-b-2 my-2"></div>
                                <p className="text-sm sm:text-base md:text-lg text-white">
                                    Dr. Devavrat Arya is a Medical Oncologist in Saket, Delhi and has an experience of 20 years in this field. Dr. Devavrat Arya practices at Max Super Speciality Hospital - Saket East Wing in Saket, Delhi. He completed MBBS from University of Delhi in 2001, DNB - General Medicine from Gujarat University, India in 2006 and DM - Oncology from Gujarat University, India in 2011.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Content />
            <Statistics />
            <VisionAndmission />
            <Faq />
        </div>
    );
}

export default About;