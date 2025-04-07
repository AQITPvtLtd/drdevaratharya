"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
    const [scrollDirection, setScrollDirection] = useState("down");


    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setScrollDirection("down");
            } else if (currentScrollY < lastScrollY) {
                setScrollDirection("up");
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.4,
            },
        },
    };

    const getItemVariant = () => {
        return {
            hidden: {
                opacity: 0,
                y: scrollDirection === "down" ? 40 : -40,
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.8,
                    ease: "easeOut",
                },
            },
        };
    };

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

            {/* Animated Content Section */}
            <motion.div
                className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 -mt-48 lg:mt-0 lg:px-20 max-w-3xl space-y-6 text-black"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
            >
                <motion.h1
                    className="text-4xl md:text-5xl font-bold leading-tight"
                    style={{ fontFamily: "Roboto Slab, serif" }}
                    variants={getItemVariant()}
                >
                    Genuine Treatments <br /> for Your Health.
                </motion.h1>

                <motion.p
                    className="text-base sm:text-lg md:text-xl max-w-lg"
                    variants={getItemVariant()}
                >
                    Join hands with us in your health journey. We offer compassionate care and innovative treatments for a healthier tomorrow.
                </motion.p>

                <motion.div className="flex flex-col sm:flex-row gap-4" variants={getItemVariant()}>
                    <Link
                        href="/about"
                        className="bg-white cursor-pointer hover:text-white text-black rounded-lg px-6 py-3 font-semibold flex items-center gap-2 hover:bg-[#fa3e93] transition-all"
                    >
                        Learn More <MdOutlineArrowOutward />
                    </Link>
                    <Link href="/contact">
                        <button className="bg-transparent cursor-pointer text-black border-2 border-white rounded-lg px-6 py-3 font-semibold flex items-center gap-2 hover:bg-[#fa3e93] hover:border-[#fa3e93] transition-all hover:text-white">
                            Contact Us <MdOutlineArrowOutward />
                        </button>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Banner;
