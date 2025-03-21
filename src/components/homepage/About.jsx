"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const About = () => {
  const [activeCategory, setActiveCategory] = useState("Experience"); // Set default category to "Experience"

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

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };
  return (
    <div>
      <div className='max-w-full grid lg:grid-cols-12'>
        <div className='col-span-6'>
          <Image src='/about/team-3.png' width={1000} height={1000} style={{ maxWidth: '500px', height: 'auto' }} alt='' />
        </div>

        <div className='col-span-6'>
          <div className="buttons mt-6 flex justify-center md:space-x-4 space-x-1">
            {['Work Experience', 'Education & Training', 'Memberships', 'Awards', 'Speciality Interest'].map((category) => (
              <button
                key={category}
                className="bg-[#0271a7] text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-[#015d7a] focus:outline-none"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="content mt-6 leading-6">
            {AboutContent.filter(item => item.category === activeCategory).map((item) => (
              <div key={item.id}>
                <h2 className="text-2xl font-semibold text-center mb-5" style={{ fontFamily: 'Roboto Slab, serif' }}>{item.category}</h2>
                <ul className="list-disc pl-5">
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

export default About