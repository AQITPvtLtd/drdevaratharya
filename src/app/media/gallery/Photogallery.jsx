"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
// Gallery Data
export const galleryData = [
  { id: 1, path: "img1.jpeg" },
  { id: 2, path: "img2.jpeg" },
  { id: 3, path: "img3.jpeg" },
  { id: 4, path: "img4.jpeg" },
  { id: 5, path: "img5.jpeg" },
  { id: 6, path: "img6.jpeg" }
];

const Photogallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % galleryData.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + galleryData.length) % galleryData.length);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  return (
    <div className='dark:bg-white bg-gray-100 min-h-screen py-10 px-4'>
      <p className='text-center text-4xl font-bold text-gray-800' style={{ fontFamily: "Roboto Slab, serif" }}>
        Our Photos
      </p>

      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:pr-[55px] pr-5'>
        {galleryData.map((photo, index) => (
          <motion.div
            key={photo.id}
            className='rounded overflow-hidden shadow-lg cursor-pointer'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              src={`/gallery/${photo.path}`}
              alt={`Photo ${photo.id}`}
              className='w-full h-80 object-contain'
              height={350}
              width={350}
            />
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className='fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50'>
          {/* Close button */}
          <button onClick={closeModal} className='absolute top-4 right-4 text-white text-2xl'>
            <FaTimes />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className='absolute left-4 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full text-xl'
          >
            <FaChevronLeft />
          </button>

          {/* Image */}
          <motion.img
            src={`/gallery/${galleryData[selectedIndex].path}`}
            alt="Selected"
            className='max-w-full max-h-[90vh] rounded shadow-lg'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          />

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className='absolute right-4 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full text-xl'
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Photogallery;
