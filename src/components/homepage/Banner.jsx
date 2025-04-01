import React from 'react';
import Image from 'next/image';
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-cover">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/banner/newbanner.png"
                    alt="Slider Image"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="w-full h-full"
                />
            </div>

            {/* Content Section */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 -mt-48 lg:mt-0 lg:px-20 max-w-3xl space-y-6 text-black">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "Roboto Slab, serif" }}>
                    Genuine Treatments <br /> for Your Health.
                </h1>

                <p className="text-base sm:text-lg md:text-xl max-w-lg">
                    Join hands with us in your health journey. We offer compassionate care and innovative treatments for a healthier tomorrow.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/about" className="bg-white cursor-pointer hover:text-white text-black rounded-lg px-6 py-3 font-semibold flex items-center gap-2 hover:bg-[#fa3e93] transition-all">
                        Learn More <MdOutlineArrowOutward />
                    </Link>
                    <Link href="/contact">
                        <button href="/contact" className="bg-transparent cursor-pointer text-black border-2 border-white rounded-lg px-6 py-3 font-semibold flex items-center gap-2 hover:bg-[#fa3e93] hover:border-[#fa3e93] transition-all hover:text-white">
                            Contact Us <MdOutlineArrowOutward />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Banner;