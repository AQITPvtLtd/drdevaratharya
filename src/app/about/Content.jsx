"use client";
import React, { useState } from "react";

const Content = () => {
    const [activeCategory, setActiveCategory] = useState("Work Experience");

    const AboutContent = [
        {
            id: 1,
            content: [
                "Sr. Consultant, Medical Oncology at International Oncology Centre, Fortis Hospital, Noida from 1st April 2012 to 2017",
                "Hon Associate Consultant, Medical Oncology, Action Cancer Hospital, Delhi from 2011 to 2012",
            ],
            category: "Work Experience",
        },
        {
            id: 2,
            content: [
                "MBBS from Maulana Azad Medical College, Delhi University",
                "M.D. (Internal Medicine) from Govt. Medical College, Surat, (South Gujarat University)",
                "D.M. (Medical Oncology) from Gujarat Cancer & Research Institute, B J Medical College, Ahmedabad, (Gujarat University)",
            ],
            category: "Education & Training",
        },
        {
            id: 3,
            content: [
                "Indian Co-Operative Oncology Network (ICON)",
                "Indian Society of Medical and Paediatric Oncology (ISMPO)",
                "European Society of Medical Oncology (ESMO)",
                "American Society of Clinical Oncology (ASCO)",
                "Association of Physicians of India (API NOIDA CHAPTER)",
            ],
            category: "Memberships",
        },
        {
            id: 4,
            content: [
                "European Certificate in Medical Oncology",
                "P.I. in multiple trials",
                "Many National/ International publications & presentations",
            ],
            category: "Awards",
        },
        {
            id: 5,
            content: [
                "Breast Cancer",
                "Lung Cancer",
                "Head and Neck Cancer",
                "Bone and Soft Tissue Sarcoma",
            ],
            category: "Speciality Interest",
        },
    ];

    return (
        <div className="max-w-5xl mx-auto lg:p-6 pt-5">
            {/* Buttons Section */}
            <div className="flex flex-wrap justify-center gap-4 lg:mb-8 mb-4">
                {[
                    "Work Experience",
                    "Education & Training",
                    "Memberships",
                    "Awards",
                    "Speciality Interest",
                ].map((category) => (
                    <button
                        key={category}
                        className={`lg:py-3 lg:px-6 px-3 py-2 rounded-lg text-base font-semibold transition-all duration-300 cursor-pointer
                        ${activeCategory === category
                                ? "bg-[#ef1a76] text-white shadow-lg scale-105"
                                : "bg-gray-200 text-gray-800 hover:bg-[#ef1a76] hover:text-white"
                            }`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Content Display */}
            <div className="bg-white shadow-lg rounded-lg lg:p-6 min-h-[250px]">
                {AboutContent.filter((item) => item.category === activeCategory).map((item) => (
                    <div key={item.id}>
                        <h2
                            className="text-2xl font-semibold text-center mb-4 text-[#ef1a76]"
                            style={{ fontFamily: "Roboto Slab, serif" }}
                        >
                            {item.category}
                        </h2>
                        <ul className="list-disc pl-5 space-y-3 text-gray-700 text-lg">
                            {item.content.map((text, index) => (
                                <li key={index}>{text}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Content;
