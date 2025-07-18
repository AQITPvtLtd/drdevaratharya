"use client";
import React, { useEffect, useState } from "react";
import { getBlog } from "@/services/getBlog";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { SlCalender } from "react-icons/sl";
const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    async function getResult() {
      try {
        const result = await getBlog();
        if (result && result.result) {
          setBlog(result.result);
        } else {
          console.error("Invalid API response:", result);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error.message);
      }
    }
    getResult();
  }, []);

  return (
    <div className="lg:p-10 overflow-x-clip px-4">
      <div className="pt-5 text-center">
        <h1 className="text-3xl font-bold dark:text-black">Read our latest blogs</h1>
      </div>

      {blog.length === 0 ? (
        <p className="text-center text-gray-500">No blogs available.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {blog.map((b) => (
            <Link
              key={b.id}
              href={`/blogs/${b.id}/${b.url}`}
              className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
            >
              <Image
                src={`/blog/${b.image}`}
                width={500}
                height={300}
                className="w-full h-[200px] object-cover"
                alt={b.title || "blog image"}
              />
              <div className="p-4">
                <h1 className="text-xl font-bold dark:text-black">{b.title}</h1>
                <div className="flex items-center gap-2 text-sm text-gray-600 my-2">
                  <SlCalender />
                  <span>{b.date ? moment(b.date).format("MMMM DD, YYYY") : "Unknown Date"}</span>
                </div>
                <p className="text-gray-700 line-clamp-3">{b.short_desc}</p>
                <Link href={`/blogs/${b.id}/${b.url}`}>
                  <button className="px-3 py-1.5 mt-3 cursor-pointer bg-[#ef1a76] text-white text-lg rounded-lg block text-center transition-all 
                                           border-2 border-transparent hover:border-[#ef1a76] hover:text-black hover:bg-white">
                    Read More
                  </button>
                </Link>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
