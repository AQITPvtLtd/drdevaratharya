import React from 'react';
import VisionAndmission from './Visionandmission';
import Image from 'next/image';
import Content from './Content';
import Statistics from '@/components/homepage/Statistics';
import Faq from './Faq';

const About = () => {
    return (
        <div className="px-4 md:px-8 ">
            <div className='grid grid-cols-1 md:grid-cols-12 items-center gap-6'>
                <div className='md:col-span-5 flex justify-center mt-5'>
                    <Image
                        src="/about/drdevavrat.png"
                        width={500}
                        height={500}
                        className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] rounded-lg shadow-lg"
                        alt="About Us"
                    />
                </div>
                <div className='col-span-7'>
                    <div className="flex items-center justify-center col-span-3 ml-3">
                        <div className="bg-gray-400 p-4">
                            <div className="bg-white p-4">
                                <div className="bg-gray-400 p-3 lg:p-7">
                                    <h2 className="text-2xl lg:text-3xl font-semibold mt-3 text-black">
                                        Dr. Devavrat Arya
                                    </h2>

                                    <h3 className="font-bold text-2xl lg:text-4xl text-black">
                                        Senior Director
                                    </h3>
                                    <div className='flex gap-2'>
                                        <Image src="/logo/max.png" height={45} width={40} className="h-[35px] w-[35px] mt-4" alt="Max Logo" />
                                        <h2 className="text-2xl lg:text-3xl font-semibold mt-3 text-gray-900">
                                            Max Super Speciality Hospital
                                        </h2>
                                    </div>
                                    <div className="border-[#ef1a76] border-b-2 my-2"></div>
                                    <p className="text-lg text-white">
                                        Dr. Devavrat Arya is a Medical Oncologist in Saket, Delhi and has an experience of 20 years in this field. Dr. Devavrat Arya practices at Max Super Speciality Hospital - Saket East Wing in Saket, Delhi. He completed MBBS from University of Delhi in 2001,DNB - General Medicine from Gujarat University, India in 2006 and DM - Oncology from Gujarat University, India in 2011.
                                    </p>


                                    {/* <Link href="/" className="px-4 py-2 mt-4 bg-[#ef1a76] text-white text-lg rounded-lg  text-center transition-all 
                                           border-2 border-transparent hover:border-[#ef1a76] gap-2 hover:text-black hover:bg-white w-fit flex">
                                        Contact us <MdOutlineArrowOutward className='mt-1' />
                                    </Link> */}
                                </div>
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