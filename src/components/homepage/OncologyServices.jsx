"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious, GrNext } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";
import { items } from "@/data/services";
import { motion } from "framer-motion";

const OncologyServices = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                },
            },
        ],
    };

    return (
        <div className="px-4 relative bg-[#84888933]">
            <motion.h1
                className="text-center font-semibold text-3xl md:text-4xl text-gray-800 py-5"
                style={{ fontFamily: "Roboto Slab, serif" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
               Our Treatments
            </motion.h1>

            <div className="max-w-6xl mx-auto relative">
                <Slider {...settings}>
                    {items.map((item) => (
                        <div key={item.id} className="px-2">
                            <div className="bg-white my-5 h-[420px] md:h-[400px] rounded-lg shadow-lg flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105">
                                <div className="h-[250px] md:h-[230px] overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt="service icon"
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4 text-center flex-grow">
                                    <h2 className="text-2xl font-bold text-black" style={{ fontFamily: "Roboto Slab, serif" }}>{item.title}</h2>
                                </div>
                                <div className="px-4 text-center flex-grow">
                                    <h2 className="text-md text-black line-clamp-2">
                                        {item.content ? (
                                            <span dangerouslySetInnerHTML={{ __html: item.content }} />
                                        ) : (
                                            "Loading..."
                                        )}
                                    </h2>
                                </div>

                                <div className="p-4">
                                    <Link
                                        href={`services/${item.url}`}
                                        className="px-4 py-2 bg-[#ef1a76] text-white text-lg rounded-lg block text-center transition-all 
                                           border-2 border-transparent hover:border-[#ef1a76] hover:text-black hover:bg-white"
                                    >
                                        Know More
                                    </Link>
                                </div>

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

// Custom Arrows
const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            className="absolute top-1/2 right-2 cursor-pointer md:right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600 z-10"
            onClick={onClick}
        >
            <GrNext size={24} />
        </button>
    );
};

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            className="absolute top-1/2 left-2 cursor-pointer md:left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600 z-10"
            onClick={onClick}
        >
            <GrPrevious size={24} />
        </button>
    );
};

export default OncologyServices;
