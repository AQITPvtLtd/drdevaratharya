import React from 'react'
import Services from './Services'

export const metadata = {
    meta_title: "Advanced Cancer Treatment in New Delhi | Dr. Devavrat Arya | Arya Oncology",
    meta_desc: "Dr. Devavrat Arya at Arya Oncology offers advanced cancer treatment in New Delhi, including chemotherapy, immunotherapy, and precision medicine for effective care.",
    keyword: [
        "cancer treatment new delhi",
        "chemotherapy new delhi",
        "immunotherapy lajpat nagar",
        "precision medicine south delhi",
        "oncology services new delhi",
        "personalized cancer treatment lajpat nagar",
        "tumor specialist new delhi",
        "cancer care south delhi",
        "medical oncologist lajpat nagar",
        "Arya Oncology delhi"
    ]
};

const page = () => {
    return (
        <div className='dark:bg-white'>
            <Services />
        </div>
    )
}

export default page