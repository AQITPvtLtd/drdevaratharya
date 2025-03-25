import React from 'react'
import { ClipLoader } from "react-spinners";

const Form = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-[#fa3e93] text-center">
                Submit Your Query
            </h1>
            <form>
                <div className="py-1">
                    <label
                        htmlFor="name"
                        className="block text-md font-medium mb-1 text-primary">
                        Full Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Your Full name"
                        className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#fa3e93] w-full"
                        name="name"
                    />
                </div>

                <div className="pb-1">
                    <label
                        htmlFor="email"
                        className="block text-md font-medium mb-1 text-primary">
                        Email Address
                    </label>
                    <input
                        type="email"
                        placeholder="Enter Your email address"
                        className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#fa3e93] w-full"
                        name="email"
                    />
                </div>

                <div className="pb-1">
                    <label
                        htmlFor="phone"
                        className="block text-md font-medium mb-1 text-primary">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        placeholder="Enter Your Phone Number"
                        className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#fa3e93] w-full"
                        name="phone"
                    />
                </div>

                <div className="pb-1">
                    <label
                        htmlFor="location"
                        className="block text-md font-medium mb-1 text-primary">
                        Location
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Your Current Location"
                        className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#fa3e93] w-full"
                        name="location"
                    />
                </div>

                <div className="pb-1">
                    <label
                        htmlFor="message"
                        className="block text-md font-medium mb-1 text-primary">
                        Write Problem English / Hindi
                    </label>
                    <textarea
                        placeholder="Describe Health Problem..."
                        className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#fa3e93] h-32 w-full"
                        name="message"
                    ></textarea>
                </div>

                <div className="pb-2">
                    <label
                        htmlFor="MedicalReport"
                        className="block text-md font-medium mb-1 text-primary">
                        Upload Medical Report (Optional)
                    </label>
                    <input
                        type="file"
                        id="MedicalReport"
                        name="MedicalReport"
                        accept=".pdf, .doc, .docx, .xls, .xlsx, .txt, .jpg, .png, .jpeg, .avif"
                        className="border bg-white border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#fa3e93] w-full"
                    />
                </div>

                <div>
                    {/* <div className="flex justify-center items-center w-full h-full bg-gray-500 bg-opacity-50 rounded-md fixed top-0 left-0 z-50">
                        <ClipLoader width="60" height="60" color="#092644" className="animate-spin" />
                    </div> */}
                    <button className="bg-[#fa3e93] border-2 border-[#fa3e93] font-semibold p-3 text-white rounded-xl hover:bg-white hover:text-black transition">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form