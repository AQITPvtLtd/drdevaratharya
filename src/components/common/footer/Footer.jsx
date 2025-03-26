import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";

const Footer = () => {
    return (
        <div className='mt-5 bg-[#fa3e93]'>
            <footer className='p-8 text-white grid lg:grid-cols-12 md:grid-cols-2'>
                <div className='lg:col-span-3'>
                    <Image src='/logo/logo_nonbg.png' width={200} height={200} alt='Logo' className='w-52 h-auto' />
                    <div className='mt-5 space-y-2'>
                        <div className='flex gap-2'><IoLocationOutline className='text-6xl font-bold hover:text-blue-950' /><Link href='https://maps.app.goo.gl/PqUsp3QC2rFygoEHA' className='block hover:text-blue-950 text-sm'>G6C6+RM4 Max Super Speciality Hospital, Saket (Max Saket), Block H, Saket, New Delhi, Delhi 110017</Link></div>
                        <div className='flex gap-2'><MdOutlineMailOutline className='text-2xl font-bold hover:text-blue-950' /><Link href='#' className='block hover:text-blue-950'>Email</Link></div>
                        <div className='flex gap-2'><LuPhone className='text-2xl font-bold hover:text-blue-950' /><Link href='tel:+91 97114 00908' className='block hover:text-blue-950'>+91 97114 00908</Link></div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-3xl md:text-3xl mt-4">
                        <Link
                            href="#"
                            target="_blank"
                            className="bg-[#888c8c] rounded-full text-white p-1.5 hover:text-[#fa3e93] hover:bg-white"
                        >
                            <FaInstagram />
                        </Link>
                        <Link
                            href="#"
                            target="_blank"
                            className="bg-[#888c8c] rounded-full text-white p-1.5 hover:text-[#fa3e93] hover:bg-white"
                        >
                            <FaFacebook />
                        </Link>
                        <Link
                            href="#"
                            target="_blank"
                            className="bg-[#888c8c] rounded-full text-white p-1.5 hover:text-[#fa3e93] hover:bg-white"
                        >
                            <FaPinterest />
                        </Link>
                        <Link
                            href="#"
                            target="_blank"
                            className="bg-[#888c8c] rounded-full text-white p-1.5 hover:text-[#fa3e93] hover:bg-white"
                        >
                            <FaSquareXTwitter />
                        </Link>
                        <Link
                            href="#"
                            target="_blank"
                            className="bg-[#888c8c] rounded-full text-white p-1.5 hover:text-[#fa3e93] hover:bg-white"
                        >
                            <FaYoutube />
                        </Link>
                    </div>
                </div>
                <div className='lg:col-start-5 lg:col-span-3'>
                    <h3 className='font-semibold text-xl md:text-2xl lg:mt-1 mt-5'>Opening Hours</h3>
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
                <div className='lg:col-start-9 lg:col-span-2 '>
                    <h3 className='font-semibold text-xl md:text-2xl lg:mt-1 mt-5'>Useful Links</h3>
                    <ul className='mt-5 space-y-2 text-sm md:text-base'>
                        <li><Link href='#' className='hover:text-blue-950'>About Us</Link></li>
                        <li><Link href='#' className='hover:text-blue-950'>Treatments</Link></li>
                        <li><Link href='#' className='hover:text-blue-950'>Type of Cancer</Link></li>
                        <li><Link href='#' className='hover:text-blue-950'>Blogs</Link></li>
                        <li><Link href='#' className='hover:text-blue-950'>Media</Link></li>
                        <li><Link href='#' className='hover:text-blue-950'>Contact</Link></li>
                    </ul>
                </div>
                <div className='lg:col-span-2'>
                    <h3 className='font-semibold text-xl md:text-2xl lg:mt-1 mt-5'>Treatments</h3>
                    <ul className='mt-5 space-y-2 text-sm md:text-base'>
                        <li><Link href='#' className='hover:text-blue-950'>Hemato Oncology</Link></li>
                        <li><Link href='#' className='hover:text-blue-950'>Gynecologic Oncology</Link></li>
                        <li><Link href='#' className='hover:text-blue-950'>Geriatric Oncology</Link></li>
                        <li><Link href='#' className='hover:text-blue-950'>Radiation Oncology</Link></li>
                        <li><Link href='#' className='hover:text-blue-950'>Surgical Oncology</Link></li>
                    </ul>
                </div>
            </footer>

            <div className='text-center text-white py-3'>
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