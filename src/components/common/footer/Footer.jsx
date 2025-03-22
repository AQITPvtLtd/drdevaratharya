import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className='bg-black max-w-full p-5 text-white grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1'>
                <div>
                    <Image src='/logo/logo_nonbg.png' width={200} height={200} alt='' />
                    <div className=''>
                        <div>
                            <Link href='#'>Address</Link>
                        </div>
                        <div>
                            <Link href='#'>Email</Link>
                        </div>
                        <div>
                            <Link href='#'>Phone</Link>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <Link href='#'><FaSquareXTwitter className='text-2xl' /></Link>
                        <Link href='#'><FaFacebook className='text-2xl' /></Link>
                        <Link href='#'><FaLinkedinIn className='text-2xl' /></Link>
                    </div>
                </div>
                <div className='list-none'>
                    <li className='font-semibold text-2xl'>Opening Hour</li>
                    <div className='flex gap-20'>
                        <li>Mon - Tues</li>
                        <li>09:00AM - 6:00PM</li>
                    </div>
                    <div className='flex gap-21'>
                        <li>Wed - Thu</li>
                        <li>09:00AM - 6:00PM</li>
                    </div>
                    <div className='flex gap-25'>
                        <li>Fri - Sat</li>
                        <li>09:00AM - 6:00PM</li>
                    </div>
                    <div className='flex gap-32'>
                        <li>Sun</li>
                        <li>Emergency Only</li>
                    </div>
                </div>
                <div>
                    <li className='list-none font-semibold text-2xl'>Useful Links</li>
                    <div><Link href='#'>About Us</Link></div>
                    <div><Link href='#'>Treatments</Link></div>
                    <div><Link href='#'>Type of Cancer</Link></div>
                    <div><Link href='#'>Blogs</Link></div>
                    <div><Link href='#'>Media</Link></div>
                    <div><Link href='#'>Contact</Link></div>
                </div>
                <div>
                    <li className='list-none font-semibold text-2xl'>Our Department</li>
                    <div><Link href='#'>Radiation Oncology</Link></div>
                    <div><Link href='#'>Surgical Oncology</Link></div>
                    <div><Link href='#'>Geriatric Oncology</Link></div>
                    <div><Link href='#'>Neuro Oncology</Link></div>
                    <div><Link href='#'>Heamato Oncology</Link></div>
                </div>
            </div>
            <div className=''>
                
            </div>
        </div>
    ) 
}

export default Footer