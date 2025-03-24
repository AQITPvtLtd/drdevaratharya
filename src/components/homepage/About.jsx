"use client"
import React from 'react'
import Image from 'next/image'
import Content from '@/app/about/Content'

const About = () => {

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

        <div className='md:col-span-6'>
          <Content />
        </div>
      </div>
    </div>
  )
}

export default About;
