import { items } from '@/data/services';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightFromBracket } from "react-icons/fa6";
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
                        height={500}
                        className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                        alt="Service Image"
                    />
                </div>

                <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8 w-full max-w-6xl">
                    {/* Content Section */}
                    <div className="relative bg-white px-6 py-8 shadow-xl rounded-2xl text-center col-span-9 lg:-mt-52">
                        <h1 className="font-extrabold text-2xl md:text-3xl text-[#f01b77] underline mb-4" style={{ fontFamily: "Roboto Slab, serif" }}>
                            {data.title}
                        </h1>
                        <div className="text-lg text-gray-700 space-y-4 text-left">
                            {data.content.map((item, index) => (
                                <div key={index} dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                        </div>
                    </div>

                    {/* Sidebar Section */}
                    <div className="shadow-2xl sticky top-20 bg-white px-4 py-4 rounded-lg col-span-3 w-auto h-fit mt-10 lg:mt-0">
                        <h2 className="text-xl font-semibold mb-4 dark:text-black" style={{ fontFamily: "Roboto Slab, serif" }}>Other Services</h2>
                        <ul className="space-y-2">
                            {items.map((a) => (
                                <li key={a.id}>
                                    <Link href={`${a.id}`}>
                                        <span className="cursor-pointer text-blue-500 hover:underline flex gap-2">
                                            <FaArrowRightFromBracket className='mt-1' />    {a.title}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceData;