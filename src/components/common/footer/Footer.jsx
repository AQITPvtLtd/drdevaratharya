import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
// import { FaYoutube } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";

const Footer = () => {
    return (
        <div className='mt-5 bg-[#fa3e93]'>
            <footer className='p-8 text-white grid lg:grid-cols-12 md:grid-cols-2'>
                <div className='lg:col-span-3'>
                    <Image src='/footer/footerlogo.png' width={200} height={200} alt='Logo' className='w-52 h-auto' />
                    <div className='mt-5 space-y-2'>
                        <div className='flex gap-2'>
                            <div> <IoLocationOutline className='text-2xl font-bold hover:text-black' /></div>
                            <Link href='https://maps.app.goo.gl/PqUsp3QC2rFygoEHA' className='block hover:text-black text-sm'>G6C6+RM4 Max Super Speciality Hospital, Saket (Max Saket), Block H, Saket, New Delhi, Delhi 110017</Link>
                        </div>
                        <div className='flex gap-2'>
                            <div>  <MdOutlineMailOutline className='text-2xl font-bold hover:text-black' /> </div>
                            <Link href='mailto:drdevavratarya@gmail.com' className='block hover:text-black'>drdevavratarya@gmail.com</Link>
                        </div>
                        <div className='flex gap-2'><LuPhone className='text-2xl font-bold hover:text-black' /><Link href='tel:+91 97114 00908' className='block hover:text-black'>+91 97114 00908</Link></div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-3xl md:text-3xl mt-4">

                        {[

                            { icon: <FaFacebook />, link: 'https://www.facebook.com/drdevavratarya/' },
                            { icon: <FaInstagram />, link: 'https://www.instagram.com/drdevavratarya/' },
                            { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/devavratarya/' },
                            // { icon: <FaYoutube />, link: '' }
                        ].map((social, index) => (
                            <Link key={index} href={social.link} target="_blank">
                                <div className='bg-[#fa3e93] p-2 rounded-full text-white hover:bg-black transition-all'>
                                    {React.cloneElement(social.icon, { className: 'text-lg sm:text-xl' })}
                                </div>
                            </Link>
                        ))}

                    </div>
                </div>
                <div className='lg:col-start-5 lg:col-span-3'>
                    <h3 className='font-semibold text-xl md:text-2xl lg:mt-1 mt-5' style={{ fontFamily: "Roboto Slab, serif" }}>Opening Hours</h3>
                    <ul className='mt-5 space-y-2 text-sm md:text-base'>
                        <p>Lajpat Nagar</p>
                        <li className='flex justify-between'><span>Tuesday to Friday </span><span>9:00 AM to 10:00 AM</span></li>

                    </ul>

                    <ul className='mt-5 space-y-2 text-sm md:text-base'>
                        <p>saket</p>
                        <li className='flex justify-between'><span>Mon, Wed, Thur, Fri</span><span>12:30 PM to 4:00 PM</span></li>
                        <hr className='border-gray-300' />
                        <li className='flex justify-between'><span>Tues </span><span>12:30 PM to 3:00 PM</span></li>
                        <hr className='border-gray-300' />
                        <li className='flex justify-between'><span>Sat </span><span>12:30 PM to 2:00 PM</span></li>
                        <hr className='border-gray-300' />
                    </ul>
                </div>
                <div className='lg:col-start-9 lg:col-span-2 '>
                    <h3 className='font-semibold text-xl md:text-2xl lg:mt-1 mt-5' style={{ fontFamily: "Roboto Slab, serif" }}>Useful Links</h3>
                    <ul className='mt-5 space-y-2 text-sm md:text-base'>
                        <li><Link href='/about' className='hover:text-black'>About Us</Link></li>
                        <li><Link href='/services' className='hover:text-black'>Treatments</Link></li>

                        <li><Link href='/blogs' className='hover:text-black'>Blogs</Link></li>
                        <li><Link href='/media/gallery' className='hover:text-black'>Photo Gallery</Link></li>
                        <li><Link href='/contact' className='hover:text-black'>Contact</Link></li>
                    </ul>
                </div>
                <div className='lg:col-span-2'>
                    <h3 className='font-semibold text-xl md:text-2xl lg:mt-1 mt-5' style={{ fontFamily: "Roboto Slab, serif" }}>Treatments</h3>
                    <ul className='mt-5 space-y-2 text-sm md:text-base'>
                        <li><Link href='/' className='hover:text-black'>Hemato Oncology</Link></li>
                        <li><Link href='/' className='hover:text-black'>Gynecologic Oncology</Link></li>
                        <li><Link href='/' className='hover:text-black'>Geriatric Oncology</Link></li>
                        <li><Link href='/' className='hover:text-black'>Radiation Oncology</Link></li>
                        <li><Link href='/' className='hover:text-black'>Surgical Oncology</Link></li>
                    </ul>
                </div>
            </footer>

            <div className='text-center text-white py-3'>
                <hr className='mx-10 border-gray-300' />
                <p className='font-semibold mt-3 text-sm md:text-base'>
                    <Link href='https://tekbooster.com' target='_blank' style={{ fontFamily: "Roboto Slab, serif" }}>
                        Design & Developed By Tek Booster (Digital Marketing Company)
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Footer;