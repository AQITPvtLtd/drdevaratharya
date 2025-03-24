import React from 'react';
import Image from 'next/image';

const VisionAndmission = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 p-6 max-w-7xl mx-auto mt-10">
            {/* Our Mission Section */}
            <div className="flex flex-col items-center text-center md:w-1/2 border-b-2 md:border-b-0 md:border-r-2 border-gray-300 pb-6 md:pb-0 md:pr-6">
                <div className="flex justify-center items-center mb-4 border-[#ef1a76] border-2 rounded-full w-28 h-28 p-2">
                    <Image
                        src="/About/mission.png"
                        width={80}
                        height={80}
                        alt="Our Mission"
                        className="rounded-full"
                    />
                </div>
                <h2 className="text-2xl font-bold text-[#ef1a76] uppercase">Our Mission</h2>
                <p className="text-gray-600 mt-2 leading-relaxed px-4 md:px-0">
                    Our mission is to provide compassionate and effective cancer care. We focus on personalized treatment plans,
                    advanced medical therapies, and a patient-first approach to ensure the best possible results. Through continuous learning
                    and research, we aim to improve cancer treatment and enhance the quality of life for our patients.
                </p>
            </div>

            {/* Our Vision Section */}
            <div className="flex flex-col items-center text-center md:w-1/2 pt-6 md:pt-0 md:pl-6">
                <div className="flex justify-center items-center mb-4 border-[#00aaff] border-2 rounded-full w-28 h-28 p-2">
                    <Image
                        src="/About/vision.png"
                        width={80}
                        height={80}
                        alt="Our Vision"
                        className="rounded-full"
                    />
                </div>
                <h2 className="text-2xl font-bold text-[#00aaff] uppercase">Our Vision</h2>
                <p className="text-gray-600 mt-2 leading-relaxed px-4 md:px-0">
                    Our vision is to provide top-quality cancer care with advanced treatments and a patient-first approach. We strive to bring hope
                    and healing by combining medical expertise, innovation, and compassionate support. Our goal is to make effective cancer treatment
                    accessible to all, improving lives through continuous progress in oncology.
                </p>
            </div>
        </div>
    );
};

export default VisionAndmission;