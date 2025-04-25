'use client';
import React, { useState, useEffect } from 'react';
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import Form from './form/Form';
import { motion } from 'framer-motion';

const Contact = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024); // Tailwind's lg breakpoint
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const AddressContent = () => (
        <>
            <Link href="https://maps.app.goo.gl/PqUsp3QC2rFygoEHA">
                <div className="flex items-start">
                    <div>
                        <IoLocationSharp className="text-white text-4xl p-1 bg-[#fa3e93] rounded-full" />
                    </div>
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold dark:text-black">Our Address</h3>
                        <p className="text-gray-700">
                            Max Super Speciality Hospital, Saket (Max Saket), Block H, Saket, New Delhi, Delhi 110017
                        </p>
                    </div>
                </div>
            </Link>

            <Link href="tel:+91 8287508944">
                <div className="flex items-start cursor-pointer">
                    <IoCall className="text-4xl text-white bg-[#fa3e93] p-1 rounded-full" />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold dark:text-black">Phone Number</h3>
                        <p className="text-gray-700">+91 82875 08944 </p>
                    </div>
                </div>
            </Link>

            <Link href="mailto:drdevavratarya@gmail.com">
                <div className="flex items-start cursor-pointer">
                    <MdEmail className="text-4xl text-white bg-[#fa3e93] p-1 rounded-full" />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold dark:text-black">Email Address</h3>
                        <p className="text-gray-700">drdevavratarya@gmail.com</p>
                    </div>
                </div>
            </Link>
        </>
    );

    return (
        <div>
            <p className='text-center text-4xl font-bold text-gray-800 dark:bg-white pt-5' style={{ fontFamily: "Roboto Slab, serif" }}>
                Contact Us
            </p>

            <div className="bg-white flex justify-center px-4">
                <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 px-4 md:px-10">

                    {/* Left Section */}
                    {isLargeScreen ? (
                        <motion.div
                            className="flex flex-col space-y-6 w-full md:w-1/2 pt-8"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <AddressContent />
                        </motion.div>
                    ) : (
                        <div className="flex flex-col space-y-6 w-full md:w-1/2 pt-8">
                            <AddressContent />
                        </div>
                    )}

                    {/* Right Section - Form */}
                    {isLargeScreen ? (
                        <motion.div
                            className="w-full md:w-1/2"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <Form />
                        </motion.div>
                    ) : (
                        <div className="w-full md:w-1/2">
                            <Form />
                        </div>
                    )}
                </div>
            </div>

            {/* Map Section */}
            {isLargeScreen ? (
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-12 py-6 dark:bg-white"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <div className="col-span-12 lg:col-start-2 lg:col-span-10 px-4 lg:px-0">
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.4137118192534!2d77.21204!3d28.527282099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1100d3bd473%3A0x4828ebc80af15a59!2sDr%20Devavrat%20Arya!5e0!3m2!1sen!2sin!4v1744607830379!5m2!1sen!2sin"
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
                </motion.div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12 py-6 dark:bg-white">
                    <div className="col-span-12 lg:col-start-2 lg:col-span-10 px-4 lg:px-0">
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.4137118192534!2d77.21204!3d28.527282099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1100d3bd473%3A0x4828ebc80af15a59!2sDr%20Devavrat%20Arya!5e0!3m2!1sen!2sin!4v1744607830379!5m2!1sen!2sin"
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
            )}
        </div>
    );
};

export default Contact;
