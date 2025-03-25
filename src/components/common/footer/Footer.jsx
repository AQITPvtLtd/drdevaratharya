import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";

const Footer = () => {
    return (
        <div className='mt-5'>
            <footer className='bg-[#fa3e93] max-w-full p-8 text-white grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6'>
                <div>
                    <Image src='/logo/logo_nonbg.png' width={200} height={200} alt='Logo' className='w-52 h-auto' />
                    <div className='mt-5 space-y-2'>
                        <div className='flex gap-2'><IoLocationOutline className='text-2xl font-bold hover:text-blue-950' /><Link href='#' className='block hover:text-blue-950 font-semibold'>Address</Link></div>
                        <div className='flex gap-2'><MdOutlineMailOutline className='text-2xl font-bold hover:text-blue-950' /><Link href='#' className='block hover:text-blue-950 font-semibold'>Email</Link></div>
                        <div className='flex gap-2'><LuPhone className='text-2xl font-bold hover:text-blue-950' /><Link href='#' className='block hover:text-blue-950 font-semibold'>Phone</Link></div>
                    </div>
                    <div className='flex gap-4 mt-5'>
                        <Link href='#'><FaSquareXTwitter className='text-2xl hover:text-gray-200' /></Link>
                        <Link href='#'><FaFacebook className='text-2xl hover:text-gray-200' /></Link>
                        <Link href='#'><FaLinkedinIn className='text-2xl hover:text-gray-200' /></Link>
                    </div>
                </div>
                <div>
                    <h3 className='font-semibold text-xl md:text-2xl'>Opening Hours</h3>
                    <ul className='mt-5 space-y-2 text-sm md:text-base'>
                        <li className='flex justify-between'><span>Mon - Tues</span><span>09:00AM - 6:00PM</span></li>
                        <hr className='border-gray-300' />
                        <li className='flex justify-between'><span>Wed - Thu</span><span>09:00AM - 6:00PM</span></li>
                        <hr className='border-gray-300' />
                        <li className='flex justify-between'><span>Fri - Sat</span><span>09:00AM - 6:00PM</span></li>
                        <hr className='border-gray-300' />
                        <li className='flex justify-between'><span>Sun</span><span>Emergency Only</span></li>
                    </ul>
                </div>
                <div className='md:mx-10'>
                    <h3 className='font-semibold text-xl md:text-2xl'>Useful Links</h3>
                    <ul className='mt-5 space-y-2 text-sm md:text-base'>
                        <li><Link href='#' className='hover:text-blue-950'>About Us</Link></li>
                        <li><Link href='#' className='hover:text-blue-950'>Treatments</Link></li>
                        <li><Link href='#' className='hover:text-blue-950'>Type of Cancer</Link></li>
                        <li><Link href='#' className='hover:text-blue-950'>Blogs</Link></li>
                        <li><Link href='#' className='hover:text-blue-950'>Media</Link></li>
                        <li><Link href='#' className='hover:text-blue-950'>Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-semibold text-xl md:text-2xl'>Our Departments</h3>
                    <ul className='mt-5 space-y-2 text-sm md:text-base'>
                        <li><Link href='#' className='hover:text-blue-950'>Radiation Oncology</Link></li>
                        <li><Link href='#' className='hover:text-blue-950'>Surgical Oncology</Link></li>
                        <li><Link href='#' className='hover:text-blue-950'>Geriatric Oncology</Link></li>
                        <li><Link href='#' className='hover:text-blue-950'>Neuro Oncology</Link></li>
                        <li><Link href='#' className='hover:text-blue-950'>Heamato Oncology</Link></li>
                    </ul>
                </div>
            </footer>
            <div className='bg-[#fa3e93] text-center text-white py-3'>
                <hr className='mx-10 border-gray-300' />
                <p className='font-semibold mt-3 text-sm md:text-base'>
                    <Link href='https://tekbooster.com' target='_blank'>
                        Design & Developed By Tek Booster (Digital Marketing Company)
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Footer;