import React from 'react'
import Image from 'next/image'
import Type from '@/components/common/Type'
const Mouth = () => {
    return (
        <div>
            <div className="mx-auto py-6 bg-gray-50">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-7xl relative">
                        <Image
                            src="/typeofcancer/mouthandoral.png"
                            width={1000}
                            height={500}
                            className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                            alt="Lung Cancer"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10 w-full max-w-6xl">
                        <div className="relative bg-white px-8 py-10 shadow-lg rounded-2xl col-span-9 lg:-mt-40">
                            <h1 className="font-bold text-3xl md:text-4xl text-[#f01b77] underline mb-6 text-center">
                                Mouth and Oral Cancer
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed">
                                Mouth and oral cancer is a serious disease that affects various parts of the mouth, including the lips, tongue, cheeks, gums, and the roof or floor of the mouth. It occurs when abnormal cells grow uncontrollably, leading to tumors or lesions. If detected early, oral cancer can be treated effectively, making awareness and regular screenings crucial.
                            </p>

                            {/* Causes Section */}
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Causes of Mouth and Oral Cancer
                            </h2>
                            <p className="text-gray-700">Several risk factors contribute to the development of oral cancer. Some of the most common causes include:</p>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Tobacco Use:</strong> Smoking cigarettes, cigars, pipes, or chewing tobacco significantly increases the risk of oral cancer.</li>
                                <li><strong>Excessive Alcohol Consumption:</strong> Heavy alcohol use can damage oral tissues and raise cancer risk, especially when combined with tobacco use.</li>
                                <li><strong>Human Papillomavirus (HPV) Infection:</strong> ome strains of HPV, particularly HPV-16, are linked to oral and throat cancers.</li>
                                <li><strong>Prolonged Sun Exposure:</strong> Excessive sun exposure can cause cancer on the lips.</li>
                                <li><strong>Poor Oral Hygiene: </strong> Lack of proper dental care and hygiene can lead to chronic infections, increasing cancer risk.</li>
                                <li><strong>Unhealthy Diet: </strong>A diet low in fruits and vegetables may contribute to oral cancer.</li>
                                <li><strong>Weakened Immune System: </strong>People with a compromised immune system are more susceptible to developing various cancers, including oral cancer.</li>
                            </ul>

                            {/* Symptoms */}
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Prevention of Mouth and Oral Cancer
                            </h2>
                            <p className="text-gray-700">Oral cancer can be prevented by adopting healthy habits and undergoing regular screenings. Here are some essential preventive measures:</p>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Avoid Tobacco and Limit Alcohol Consumption:</strong>The combination of alcohol and tobacco increases the risk of oral cancer significantly.</li>
                                <li><strong>Maintain Good Oral Hygiene:</strong>  Regular brushing, flossing, and dental check-ups help prevent infections that may lead to cancer.</li>
                                <li><strong>Eat a Balanced Diet:</strong>  Include plenty of fresh fruits, vegetables, and whole grains to boost immunity and overall health.</li>
                                <li><strong>Protect Lips from Sun Exposure:</strong> Use lip balm with SPF and avoid excessive sun exposure.</li>
                                <li><strong>Get Vaccinated Against HPV: </strong> The HPV vaccine can lower the risk of developing HPV-related oral cancers.</li>
                                <li><strong>Regular Dental Check-ups: </strong> Dentists can identify early signs of oral cancer during routine check-ups.</li>
                            </ul>

                            {/* Diagnosis */}
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Treatment Options
                            </h2>
                            <p className="text-gray-700">Treatment for oral cancer depends on its stage and location. Common treatments include:</p>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Surgery:</strong> Removal of cancerous tumors or affected tissues.</li>
                                <li><strong>Radiation Therapy:</strong> High-energy rays target and destroy cancer cells.</li>
                                <li><strong>Chemotherapy: </strong> Medications are used to kill or slow cancer growth.</li>
                                <li><strong>Targeted Therapy: </strong> Uses drugs that specifically attack cancer cells without harming normal cells.</li>
                            </ul>

                            {/* Conclusion */}
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Conclusion
                            </h2>
                            <p className="text-gray-700">
                                Mouth and oral cancer is a preventable and treatable disease if detected early. Avoiding tobacco, alcohol, and maintaining good oral hygiene can significantly reduce the risk. Regular screenings and awareness play a crucial role in early detection and successful treatment. By taking preventive measures and seeking timely medical advice, individuals can protect themselves from this life-threatening disease.
                            </p>
                        </div>
                        <div className="col-span-3 sticky top-20">
                            <Type />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mouth