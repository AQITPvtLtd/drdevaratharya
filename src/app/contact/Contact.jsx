import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import Form from './form/Form';

const Contact = () => {
    return (
        <div className="">
            <div className="">
                <div className="relative">
                    <Image
                        src="/contact/santoshCon.jpeg"
                        width={800}
                        height={800}
                        className="w-full h-[40vh] md:h-[50vh] object-cover"
                        alt="service Image"
                    />
                    <div className="absolute"></div>
                    <h1 className="text-white font-serif text-center text-4xl md:text-6xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center">
                        Get in Touch
                    </h1>
                </div>
                <div className="bg-white flex justify-center mt-[50px] px-4">
                    <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 px-4 md:px-10">
                        {/* Left Section: Address Details */}
                        <div className="flex flex-col space-y-6 w-full md:w-1/2 mt-14">
                            <div className="flex items-start">
                                <div className="text-4xl">
                                    <IoLocationSharp
                                        aria-label="Location Icon"
                                        className="text-white p-1 bg-[#fa3e93] rounded-full"
                                    />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold">Our Address</h3>
                                    <p className="text-gray-700">
                                        108 Pillar No. 107, 2-B, Pusa Rd, next to Karol Bagh, Block
                                        18 A, Rajinder Place, Karol Bagh, New Delhi, Delhi, 110005
                                    </p>
                                </div>
                            </div>

                            <Link href="tel:+919999137803">
                                <div className="flex items-start cursor-pointer">
                                    <IoCall
                                        aria-label="Phone Icon"
                                        className="text-4xl text-white bg-[#fa3e93] p-1 rounded-full"
                                    />
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold">Phone Number</h3>
                                        <p className="text-gray-700">+91 9999137803</p>
                                    </div>
                                </div>
                            </Link>

                            <Link href="mailto:officialsantoshghai@gmail.com">
                                <div className="flex items-start cursor-pointer">
                                    <MdEmail
                                        aria-label="Email Icon"
                                        className="text-4xl text-white bg-[#fa3e93] p-1 rounded-full"
                                    />
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold">Email Address</h3>
                                        <p className="text-gray-700">
                                            officialsantoshghai@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Right Section: Contact Form */}
                        <div className="w-full md:w-1/2">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 mt-6">
                <div className="col-span-12 lg:col-start-2 lg:col-span-10 px-4 lg:px-0">
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.589153916314!2d77.21169479999999!3d28.5220062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1ea73f05b49%3A0xb0bed1820b3bf7fc!2sDr%20Devavrat%20Arya!5e0!3m2!1sen!2sin!4v1742875582465!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            className="rounded-xl"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact