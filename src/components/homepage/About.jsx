"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const About = () => {
  const [activeCategory, setActiveCategory] = useState("Work Experience"); // Default Category Set

  const AboutContent = [
    {
      id: 1,
      content: [
        "Sr. Consultant, Medical Oncology at International Oncology Centre, Fortis Hospital, Noida from 1st April 2012 to 2017",
        "Hon Associate Consultant, Medical Oncology, Action Cancer Hospital, Delhi from 2011 to 2012",
      ],
      category: "Work Experience"
    },
    {
      id: 2,
      content: [
        "MBBS from Maulana Azad Medical College, Delhi University",
        "M.D. (Internal Medicine) from Govt. Medical College, Surat, (South Gujarat University)",
        "D.M. (Medical Oncology) from Gujarat Cancer & Research Institute, B J Medical College, Ahmedabad, (Gujarat University)"
      ],
      category: "Education & Training"
    },
    {
      id: 3,
      content: [
        "Indian Co-Operative Oncology Network (ICON)",
        "Indian Society of Medical and Paediatric Oncology (ISMPO)",
        "European Society of Medical Oncology (ESMO)",
        "American Society of Clinical Oncology (ASCO)",
        "Association of Physicians of India (API NOIDA CHAPTER)"
      ],
      category: "Memberships"
    },
    {
      id: 4,
      content: [
        "European Certificate in Medical Oncology",
        "P.I. in multiple trials",
        "Many National/ International publications & presentations",
      ],
      category: "Awards"
    },
    {
      id: 5,
      content: [
        "Breast Cancer",
        "Lung Cancer",
        "Head and Neck Cancer",
        "Bone and Soft Tissue Sarcoma"
      ],
      category: "Speciality Interest"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* Image Section */}
        <div className="md:col-span-6 flex justify-center">
          <Image
            src="/about/team-3.png"
            width={500}
            height={500}
            className="w-full max-w-[400px] md:max-w-[500px] rounded-lg shadow-lg"
            alt="About Us"
          />
        </div>

        {/* Content Section */}
        <div className="md:col-span-6">
          {/* Buttons Section */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
            {['Work Experience', 'Education & Training', 'Memberships', 'Awards', 'Speciality Interest'].map((category) => (
              <button
                key={category}
                className={`py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300
                ${activeCategory === category ? 'bg-[#ef1a76] text-white' : 'bg-gray-200 text-gray-800 hover:bg-[#ef1a76] hover:text-white'}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Content Display */}
          <div className="bg-white shadow-md rounded-lg p-6">
            {AboutContent.filter(item => item.category === activeCategory).map((item) => (
              <div key={item.id}>
                <h2 className="text-2xl font-semibold text-center mb-4 text-[#ef1a76]" style={{ fontFamily: 'Roboto Slab, serif' }}>
                  {item.category}
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {item.content.map((text, index) => (
                    <li key={index}>{text}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
