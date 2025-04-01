import React from 'react'
import Image from 'next/image'
import Type from '@/components/common/Type'
const Colorectal = () => {
    return (
        <div>
            <div className="mx-auto py-6 bg-gray-50">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-7xl px-5 relative">
                        <Image
                            src="/typeofcancer/colorectal_enhanced.png"
                            width={1000}
                            height={500}
                            className="w-full lg:h-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                            alt="Lung Cancer"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:mt-10 mt-4 w-full max-w-6xl">
                        <div className="relative bg-white px-8 py-10 shadow-lg rounded-2xl col-span-9 lg:-mt-40">
                            <h1 className="font-bold text-3xl md:text-4xl text-[#f01b77] underline mb-6 text-center">
                                Colorectal Cancer
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed">
                                Colorectal cancer, also known as colon cancer or rectal cancer, occurs in the colon (large intestine) or rectum. It is one of the most common cancers worldwide, but early detection and proper treatment can significantly improve survival rates. This cancer often begins as small growths called polyps, which can develop into cancer over time if left untreated.                            </p>

                            {/* Causes Section */}
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Causes of Colorectal Cancer                            </h2>
                            <p className="text-gray-700">Several factors increase the risk of colorectal cancer. Some of the primary causes include:</p>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Age: </strong> The risk increases after the age of 50, although younger individuals can also develop colorectal cancer.</li>
                                <li><strong>Family History and Genetics: </strong> A family history of colorectal cancer or inherited genetic conditions like Lynch syndrome increases the risk.</li>
                                <li><strong>Unhealthy Diet: </strong> Diets high in processed meats, red meat, and low in fiber (fruits and vegetables) can contribute to colorectal cancer.</li>
                                <li><strong>Obesity and Lack of Physical Activity:</strong> Being overweight and leading a sedentary lifestyle can increase the likelihood of developing cancer.</li>
                                <li><strong>Smoking and Alcohol Consumption:</strong> Both habits are linked to an increased risk of colorectal and other cancers.</li>
                                <li><strong>Chronic Inflammatory Diseases: </strong>Conditions like Crohn’s disease and ulcerative colitis can increase the risk.</li>
                            </ul>

                            {/* Symptoms */}
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Symptoms of Colorectal Cancer
                            </h2>
                            <p className="text-gray-700">In the early stages, colorectal cancer may not show noticeable symptoms. However, as the disease progresses, some common signs include:</p>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Changes in Bowel Habits: </strong>Persistent diarrhea, constipation, or a change in stool consistency.</li>
                                <li><strong>Blood in Stool:</strong> Bright red or dark blood in stool, which may indicate internal bleeding.</li>
                                <li><strong>Abdominal Discomfort:</strong> Persistent cramps, bloating, gas, or pain in the stomach area.</li>
                                <li><strong>Unexplained Weight Loss:</strong> Losing weight without any changes in diet or exercise.</li>
                                <li><strong>Fatigue and Weakness: </strong> Feeling excessively tired despite adequate rest.</li>
                                <li><strong>Feeling of Incomplete Bowel Emptying: </strong> A sensation that the bowel does not empty completely after a bowel movement.</li>
                            </ul>
                            <p className="text-gray-700">If any of these symptoms persist for more than a few weeks, it is crucial to consult a doctor for screening.</p>

                            {/* Diagnosis */}
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Prevention of Colorectal Cancer
                            </h2>
                            <p className="text-gray-700">While some risk factors cannot be controlled, adopting a healthy lifestyle can significantly reduce the chances of developing colorectal cancer. Here are some preventive measures:</p>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Eat a Healthy Diet: </strong> Include fiber-rich foods like fruits, vegetables, whole grains, and legumes. Limit red meat, processed foods, and high-fat diets.</li>
                                <li><strong>Stay Physically Active: </strong> Regular exercise helps maintain a healthy weight and reduces cancer risk.</li>
                                <li><strong>Quit Smoking and Limit Alcohol Consumption: </strong> Both habits increase the risk of colorectal and other cancers.</li>
                                <li><strong>Get Regular Screenings:</strong> Colonoscopy and stool tests can detect precancerous polyps early before they turn into cancer. Screenings are recommended starting at age 45 or earlier for high-risk individuals.</li>
                                <li><strong>Maintain a Healthy Weight:</strong> Being overweight increases the risk of several cancers, including colorectal cancer.</li>
                                <li><strong>Manage Chronic Conditions: </strong> Properly managing diseases like diabetes and inflammatory bowel disease can lower cancer risk.</li>
                            </ul>



                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Treatment Options
                            </h2>
                            <p className="text-gray-700">The treatment of colorectal cancer depends on its stage and location. Some common treatment options include:</p>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Surgery: </strong> The removal of cancerous polyps or a section of the colon or rectum.</li>
                                <li><strong>Radiation Therapy:</strong>  High-energy rays target and destroy cancer cells, often used for rectal cancer.</li>
                                <li><strong>Chemotherapy: </strong> Medications help kill cancer cells and may be used before or after surgery.</li>
                                <li><strong>Targeted Therapy:</strong> Special drugs attack specific cancer cells without harming normal cells.</li>
                                <li><strong>Immunotherapy: </strong> Boosts the body's immune system to fight cancer.</li>
                            </ul>

                            {/* Conclusion */}
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Conclusion
                            </h2>
                            <p className="text-gray-700">
                                Colorectal cancer is a serious but preventable and treatable disease when detected early. A healthy lifestyle, regular screenings, and timely medical attention can help reduce the risk and improve survival rates. Raising awareness and adopting preventive measures can go a long way in protecting against this condition.
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

export default Colorectal