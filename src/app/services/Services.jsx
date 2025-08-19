"use client";
import { items } from "@/data/services";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Parent container animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Each card animation
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  return (
    <div>
      <h1
        className="text-center font-semibold text-2xl lg:text-3xl dark:text-black pt-5"
        style={{ fontFamily: "Roboto Slab, serif" }}
      >
        Our Treatments
      </h1>

      {/* Parent container with stagger animation */}
      <motion.div
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-5 md:pr-[55px] pr-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((item) => (
          <motion.div key={item.id} className="px-2" variants={cardVariants}>
            <Link href={`services/${item.url}`}>
              <div className="bg-white my-5 h-[420px] md:h-[400px] rounded-lg shadow-lg flex flex-col overflow-hidden">
                <div className="h-[250px] md:h-[230px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt="service icon"
                    width={400}
                    height={400}
                    className="w-full object-cover h-[250px]"
                  />
                </div>

                <div className="p-4 text-center flex-grow">
                  <h2
                    className="text-xl font-bold text-black"
                    style={{ fontFamily: "Roboto Slab, serif" }}
                  >
                    {item.title}
                  </h2>
                </div>

                <div className="px-4 text-center flex-grow">
                  <h2 className="text-md text-black line-clamp-2">
                    {item.content ? (
                      <span
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                    ) : (
                      "Loading..."
                    )}
                  </h2>
                </div>

                <div className="p-4">
                  <Link
                    href={`services/${item.url}`}
                    className="px-4 py-2 bg-[#ef1a76] text-white text-lg rounded-lg block text-center transition-all border-2 border-transparent hover:border-[#ef1a76] hover:text-black hover:bg-white"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
