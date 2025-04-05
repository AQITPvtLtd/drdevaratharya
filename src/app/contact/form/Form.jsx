"use client";

import { form } from '@/services/user';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { ClipLoader } from "react-spinners";

const Form = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        location: "",
        message: "",
        MedicalReport: null,
    });

    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 10 * 1024 * 1024) {
                Swal.fire({
                    icon: "warning",
                    title: "File Too Large",
                    text: "Please upload a file smaller than 10MB.",
                });
                e.target.value = "";
                return;
            }
            setFormData({ ...formData, MedicalReport: file });
        }
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formDataToSend = new FormData();
        formDataToSend.append("fullname", formData.fullname);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("location", formData.location);
        formDataToSend.append("message", formData.message);

        if (formData.MedicalReport) {
            formDataToSend.append("MedicalReport", formData.MedicalReport);
        }

        try {
            const response = await form(formDataToSend)
            if (response.success) {
                Swal.fire({
                    title: "Form Submitted Successfully!",
                    text: "We have received your information.",
                    icon: "success",
                });
                setFormData({
                    fullname: "",
                    phone: "",
                    email: "",
                    location: "",
                    message: "",
                    MedicalReport: null
                })
                router.push("/")
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Please try again later.",
                })
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to submit the form. Please check your network and try again.",
            })
        }
        finally {
            setLoading(false)
        }
    };


    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-[#fa3e93] text-center mb-6" style={{ fontFamily: "Roboto Slab, serif" }}>
                Submit Your Query
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <input
                        className='bg-gray-100 p-3 w-full rounded-md dark:text-black border focus:border-[#fa3e93] focus:ring-1 focus:ring-[#fa3e93] outline-none'
                        placeholder='Your Name'
                        type='text'
                        id='fullname'
                        name='fullname'
                        value={formData.fullname}
                        onChange={handlechange}
                        required
                    />
                    <input
                        className='bg-gray-100 p-3 w-full dark:text-black rounded-md border focus:border-[#fa3e93] focus:ring-1 focus:ring-[#fa3e93] outline-none'
                        placeholder='Phone Number'
                        type='text'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handlechange}
                        required
                    />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
                    <input
                        className='bg-gray-100 p-3 w-full dark:text-black rounded-md border focus:border-[#fa3e93] focus:ring-1 focus:ring-[#fa3e93] outline-none'
                        placeholder='Email Address'
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handlechange}
                        required
                    />
                    <input
                        className='bg-gray-100 p-3 w-full dark:text-black rounded-md border focus:border-[#fa3e93] focus:ring-1 focus:ring-[#fa3e93] outline-none'
                        placeholder='Enter Your Location'
                        type='location'
                        id='location'
                        name='location'
                        value={formData.location}
                        onChange={handlechange}
                        required
                    />
                </div>
                <textarea
                    className='bg-gray-100 p-3 w-full dark:text-black rounded-md border focus:border-[#fa3e93] focus:ring-1 focus:ring-[#fa3e93] outline-none'
                    placeholder='Describe Health Problem...'
                    rows='4'
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handlechange}
                ></textarea>

                <div>
                    <label htmlFor="MedicalReport" className="block text-md font-medium mb-2 text-gray-700 dark:text-black ">
                        Upload Medical Report (Optional)
                    </label>
                    <input
                        type="file"
                        id="MedicalReport"
                        name="MedicalReport"
                        onChange={handleFileChange}
                        accept=".pdf, .doc, .docx, .xls, .xlsx, .txt, .jpg, .png, .jpeg, .avif"
                        className="border bg-gray-100 border-gray-300 p-3 rounded-md w-full focus:border-[#fa3e93] focus:ring-1 focus:ring-[#fa3e93] dark:text-black outline-none"
                    />
                </div>

                <div className="text-center mt-4">
                    {
                        loading ? (<div className="flex justify-center items-center w-full h-full fixed top-0 left-0 z-50 rounded-md" style={{ backgroundColor: "rgba(75, 0, 130, 0.5)" }}>
                            <ClipLoader width="60" height="60" color="#eb5f30" className="animate-spin" />
                        </div>) : (<button className="bg-[#fa3e93] border-2 border-[#fa3e93] font-semibold cursor-pointer px-6 py-3 text-white rounded-xl hover:bg-white hover:text-[#fa3e93] transition duration-300">
                            Send Message
                        </button>)
                    }

                </div>
            </form >
        </div >
    );
};

export default Form;