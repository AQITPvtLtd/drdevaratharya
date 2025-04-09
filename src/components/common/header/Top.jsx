"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMailOpenOutline } from 'react-icons/io5';
import { FiPhoneCall } from 'react-icons/fi';
import { FaInstagram, FaFacebook, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5
        }
    }
};

const item = {
    hidden: { opacity: 0, y: -30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: 'easeOut'
        }
    }
};


const Top = () => {
    return (
        <motion.div
            className='container mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-4 dark:bg-white'
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }} // 👈 triggers again when ~20% is in view
        >

            {/* Logo Section */}
            <motion.div className="flex justify-center lg:justify-start w-full lg:w-auto" variants={item}>
                <Link href="/" className="block">
                    <Image
                        src="/logo/logo_nonbg.png"
                        alt="logo"
                        width={250}
                        height={80}
                        className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[250px]"
                    />
                </Link>
            </motion.div>

            {/* Contact Info */}
            <motion.div className='hidden md:flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center lg:text-left gap-4' variants={item}>
                {/* Email */}
                <div className='flex items-center gap-2'>
                    <IoMailOpenOutline className='text-2xl lg:text-3xl text-[#fa3e93]' />
                    <span className='text-xs sm:text-sm lg:text-base'>
                        <Link href="mailto:drdevavratarya@gmail.com" className="hover:text-[#fa3e93] dark:text-black">drdevavratarya@gmail.com</Link>
                    </span>
                </div>

                <div className='hidden lg:block border-r-2 h-10 border-[#fa3e93]'></div>

                {/* Phone */}
                <div className='flex items-center gap-2'>
                    <FiPhoneCall className='text-2xl lg:text-3xl text-[#fa3e93]' />
                    <span className='text-xs sm:text-sm lg:text-base'>
                        <Link href="tel:+919599533443" className="hover:text-[#fa3e93] dark:text-black">+91-9599533443</Link>
                    </span>
                </div>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
                className="flex justify-center lg:justify-end gap-3"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
            >
                {[
                    { icon: <FaFacebook />, link: 'https://www.facebook.com/drdevavratarya/' },
                    { icon: <FaInstagram />, link: 'https://www.instagram.com/drdevavratarya/' },
                    { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/devavratarya/' },
                    { icon: <FaYoutube />, link: 'https://www.youtube.com/@dr.devavratarya254/featured' }
                ].map((social, index) => (
                    <Link key={index} href={social.link} target="_blank">
                        <motion.div
                            variants={item}
                            className='bg-[#fa3e93] p-2 rounded-full text-white hover:bg-black transition-all'
                        >
                            {React.cloneElement(social.icon, { className: 'text-lg sm:text-xl' })}
                        </motion.div>
                    </Link>
                ))}
            </motion.div>
        </motion.div>

    );
}

export default Top;
