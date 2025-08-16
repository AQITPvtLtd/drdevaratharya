import React from 'react'
import Blog from './Blog'

export const metadata = {
    title: "Cancer Care Blogs by Dr. Devavrat Arya | Medical Oncologist in New Delhi",
    description: "Stay informed with expert cancer care blogs by Dr. Devavrat Arya, medical oncologist in New Delhi. Tips, latest treatments, and patient stories to support your cancer journey.",
    keywords: [
        "cancer care blogs new delhi",
        "oncology articles lajpat nagar",
        "cancer treatment tips saket",
        "medical oncology blogs south delhi",
        "patient stories new delhi",
        "cancer awareness lajpat nagar",
        "chemotherapy advice saket",
        "cancer research updates south delhi",
        "cancer support lajpat nagar",
        "Arya Oncology new delhi"
    ]
};

const page = () => {
    return (
        <div className='bg-white'>
            <Blog />
        </div>
    )
}

export default page