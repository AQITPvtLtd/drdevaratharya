'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Video = () => {
    const videos = [
        "ROFQBS6Eics",
        "IUcW5RZe93k",
        "jL54KamGTdc",
        "R8nMDftycLU",
        "EEBq56Zg3H8",
        "G7RwxLRZ-ow"
    ];

    return (
        <div className='container mx-auto px-4 py-10 dark:bg-white'>
            {/* Heading */}
            <p
                className='text-center text-4xl font-bold text-gray-800 mb-8'
                style={{ fontFamily: "Roboto Slab, serif" }}
            >
                Our Videos
            </p>

            {/* Video Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {videos.map((videoId, index) => (
                    <motion.div
                        key={index}
                        className='relative w-full'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.4,
                            ease: 'easeOut'
                        }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <iframe
                            className='w-full aspect-video rounded-lg shadow-lg transition-transform transform hover:scale-105'
                            src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                            title={`YouTube video player ${index + 1}`}
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                            allowFullScreen
                        ></iframe>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Video;
