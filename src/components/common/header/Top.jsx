import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMailOpenOutline } from 'react-icons/io5';
import { FiPhoneCall } from 'react-icons/fi';
import { FaInstagram, FaFacebook, FaLinkedinIn } from 'react-icons/fa6';

const Top = () => {
    return (
        <div className='container mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-4'>
            {/* Logo Section */}
            <div className="flex justify-center lg:justify-start w-full lg:w-auto">
                <Link href="/" className="block">
                    <Image
                        src="/logo/logo_nonbg.png"
                        alt="logo"
                        width={250}
                        height={80}
                        className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[250px]"
                    />
                </Link>
            </div>

            {/* Contact Info */}
            <div className='hidden md:flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center lg:text-left gap-4'>
                {/* Email */}
                <div className='flex items-center gap-2'>
                    <IoMailOpenOutline className='text-2xl lg:text-3xl text-[#fa3e93]' />
                    <span className='text-xs sm:text-sm lg:text-base'>
                        <Link href="mailto:drdevavratarya@gmail.com" className="hover:text-[#fa3e93]">drdevavratarya@gmail.com</Link>
                    </span>
                </div>

                {/* Vertical Divider */}
                <div className='hidden lg:block border-r-2 h-10 border-[#fa3e93]'></div>

                {/* Phone */}
                <div className='flex items-center gap-2'>
                    <FiPhoneCall className='text-2xl lg:text-3xl text-[#fa3e93]' />
                    <span className='text-xs sm:text-sm lg:text-base'>
                        <Link href="tel:+919599533443" className="hover:text-[#fa3e93]">+91-9599533443</Link>
                    </span>
                </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-end gap-3">
                {[

                    { icon: <FaFacebook />, link: 'https://www.facebook.com/drdevavratarya/' },
                    { icon: <FaInstagram />, link: 'https://www.instagram.com/drdevavratarya/' },
                    { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/devavratarya/' },
                    // { icon: <FaYoutube />, link: '#' }
                ].map((social, index) => (
                    <Link key={index} href={social.link} target="_blank">
                        <div className='bg-[#fa3e93] p-2 rounded-full text-white hover:bg-black transition-all'>
                            {React.cloneElement(social.icon, { className: 'text-lg sm:text-xl' })}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Top;
