"use client";
import React, { useEffect, useState } from "react";
import { getBlog } from "@/services/getBlog";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

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
    <div className="lg:p-10 overflow-x-clip">
      <div className="">
        <h1 className="text-3xl font-bold text-center">Latest Blog</h1>
        <p className="text-center text-lg">Read our latest blog.</p>
      </div>

      {blog.length == 0 ? (
        <p className="text-center text-gray-500">No blogs available.</p>
      ) : (
        blog.map((b) => (
          <Link
            key={b.id}
            href={`/blogs/${b.id}/${b.url}`}
            className="lg:flex shadow-2xl hover:border-b-2 rounded-2xl mb-4 mt-5 hover:scale-105 duration-300 hover:shadow-lg "
          >
            <Image
              src={`/blog/${b.image}`}
              width={1000}
              height={1000}
              className="lg:w-[200px] h-[150px] object-cover rounded-2xl"
              alt={b.title || "blog image"}
            />
            <div className="p-4">
              <h1 className="text-xl font-bold">{b.title}</h1>
              <div className="flex">
                <div className="flex my-2">
                  {b.date ? moment(b.date).format("MMMM DD, YYYY") : "Unknown Date"}
                </div>
                <div className="flex my-2 ml-4">Dr Devavrat Arya</div>
              </div>
              <p>{b.short_desc}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Blog;
