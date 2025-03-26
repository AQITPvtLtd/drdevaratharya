import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { IoMailOpenOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const Top = () => {
    return (
        <div className='container mx-auto grid grid-cols-12 mt-5 items-center'>
            <div className="lg:w-[300px] w-[200px] lg:col-start-2 col-start-1 lg:col-span-2 col-span-1 ">
                <Link
                    href="/"
                    className={`header-logo block lg:ml-0 ml-2 mt-3 lg:my-3`}
                >
                    <Image
                        src="/logo/logo_nonbg.png"
                        alt="logo"
                        width={400}
                        height={500}
                        className="lg:w-[350px] lg:h-[100px]"
                    />
                </Link>
            </div>

            <div className='col-start-5 col-span-2 flex'>

                <div className='flex gap-4 mt-3'>
                    <div className='flex gap-2 mt-3'>
                        <span className='text-4xl text-[#fa3e93]'><IoMailOpenOutline /></span>
                        <span><Link href="">drramkinkar@gmail.com info@drramkinkar.com</Link></span>
                    </div>
                    <div className='border-r-2 h-20 border-[#fa3e93]'></div>
                </div>

                <div className='flex px-2 mt-3'>
                    <div className='flex gap-2 mt-4'>
                        <span><FiPhoneCall className='text-4xl text-[#fa3e93]' /></span>
                        <span><Link href="">+91-9599533443</Link></span>
                    </div>
                    <div className='border-r-2 h-20 border-[#fa3e93] p-1'></div>
                </div>

                <div className="flex mt-6 gap-4">
                    <Link
                        href="#"
                        target="_blank"
                    >
                        <div className='bg-[#fa3e93] p-2 rounded-full text-white hover:bg-black'>
                            <FaInstagram className='text-3xl' />
                        </div>
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                    >
                        <div className='bg-[#fa3e93] p-2 rounded-full text-white hover:bg-black'>
                            <FaFacebook className='text-3xl' />
                        </div>
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                    >
                        <div className='bg-[#fa3e93] p-2 rounded-full text-white hover:bg-black'>
                            <FaPinterest className='text-3xl' />
                        </div>
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                    >
                        <div className='bg-[#fa3e93] p-2 rounded-full text-white hover:bg-black'>
                            <FaSquareXTwitter className='text-3xl' />
                        </div>
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                    >
                        <div className='bg-[#fa3e93] p-2 rounded-full text-white hover:bg-black'>
                            <FaYoutube className='text-3xl' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Top