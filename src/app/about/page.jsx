import React from 'react'
import About from './About'
export const metadata = {
    meta_title: "About Dr. Devavrat Arya | Medical Oncologist in New Delhi | Arya Oncology",
    meta_desc: "Learn about Dr. Devavrat Arya, a trusted medical oncologist in New Delhi at Arya Oncology, dedicated to providing expert cancer care with compassion and advanced treatments.",
    keyword: [
        "medical oncologist new delhi",
        "cancer specialist new delhi",
        "oncology expert lajpat nagar",
        "cancer care south delhi",
        "medical oncology clinic new delhi",
        "cancer treatment expert lajpat nagar",
        "oncology doctor south delhi",
        "compassionate cancer care new delhi",
        "Arya Oncology delhi",
        "trusted oncologist new delhi"
    ]
};
const page = () => {
    return (
        <div className='dark:bg-white'>
            <About />
        </div>
    )
}

export default page