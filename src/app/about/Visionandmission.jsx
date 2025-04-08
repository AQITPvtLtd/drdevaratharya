"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import useIsLargeScreen from '@/hooks/useIsLargeScreen';

const VisionAndMission = () => {
    const missionRef = useRef(null);
    const visionRef = useRef(null);
    const isMissionInView = useInView(missionRef, { once: false });
    const isVisionInView = useInView(visionRef, { once: false });
    const isLargeScreen = useIsLargeScreen();

    return (
        <div className="max-w-7xl mx-auto px-4 mt-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 p-6">

                {/* Mission Section */}
                <motion.div
                    ref={missionRef}
                    initial={isLargeScreen ? { opacity: 0, x: -100 } : {}}
                    animate={
                        isLargeScreen
                            ? isMissionInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -70 }
                            : {}
                    }
                    transition={isLargeScreen ? { duration: 0.7, ease: "easeOut" } : {}}
                    className="flex flex-col items-center text-center md:w-1/2 border-b-2 md:border-b-0 md:border-r-2 border-gray-300 pb-6 md:pb-0 md:pr-6"
                >
                    <div className="flex justify-center items-center mb-4 border-[#ef1a76] border-2 rounded-full w-28 h-28 p-2">
                        <Image src="/about/mission.png" width={80} height={80} alt="Our Mission" className="rounded-full" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#ef1a76] uppercase" style={{ fontFamily: "Roboto Slab, serif" }}>Our Mission</h2>
                    <p className="text-gray-600 mt-2 leading-relaxed px-4 md:px-0">
                    Our mission is to provide compassionate and effective cancer care. We focus on personalized treatment plans,
                    advanced medical therapies, and a patient-first approach to ensure the best possible results.
                    </p>
                </motion.div>

                {/* Vision Section */}
                <motion.div
                    ref={visionRef}
                    initial={isLargeScreen ? { opacity: 0, x: 100 } : {}}
                    animate={
                        isLargeScreen
                            ? isVisionInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: 70 }
                            : {}
                    }
                    transition={isLargeScreen ? { duration: 0.7, ease: "easeOut" } : {}}
                    className="flex flex-col items-center text-center md:w-1/2 pt-6 md:pt-0 md:pl-6"
                >
                    <div className="flex justify-center items-center mb-4 border-[#00aaff] border-2 rounded-full w-28 h-28 p-2">
                        <Image src="/about/vision.png" width={80} height={80} alt="Our Vision" className="rounded-full" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#00aaff] uppercase" style={{ fontFamily: "Roboto Slab, serif" }}>Our Vision</h2>
                    <p className="text-gray-600 mt-2 leading-relaxed px-4 md:px-0">
                    Our vision is to provide top-quality cancer care with advanced treatments and a patient-first approach. We strive to bring hope
                    and healing through innovation and support.
                    </p>
                </motion.div>

            </div>
        </div>
    );
};

export default VisionAndMission;

