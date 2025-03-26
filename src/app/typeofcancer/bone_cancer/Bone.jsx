import React from 'react'
import Image from 'next/image'
import Type from '@/components/common/Type'
const Bone = () => {
    return (
        <div>
            <div className="mx-auto py-6 bg-gray-50">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-7xl relative">
                        <Image
                            src="/typeofcancer/bone.png"
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
                                Bone Cancer
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed">
                                Bone cancer is a rare but serious disease that occurs when abnormal cells grow uncontrollably in the bones. It can develop in any bone but is most commonly found in the long bones of the arms and legs. Bone cancer can be primary (originating in the bones) or secondary (spreading to the bones from other cancers like breast, lung, or prostate cancer). Early detection and treatment can improve survival rates and quality of life for affected individuals.                            </p>


                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Types of Bone Cancer
                            </h2>
                            <p className="text-gray-700">Bone cancer is classified into different types based on the cells affected:</p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                1. Osteosarcoma
                            </h3>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li>The most common type of bone cancer, usually affecting children and young adults.</li>
                                <li>Develops in the long bones, such as the arms and legs.</li>
                                <li>Grows quickly and has a high tendency to spread to other parts of the body.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                2. Chondrosarcoma
                            </h3>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li>Affects cartilage-producing cells in the bones.</li>
                                <li>More common in adults over 40.</li>
                                <li>Grows at a slower rate but can become aggressive in some cases.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                3. Ewing’s Sarcoma
                            </h3>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li>Affects the bones and surrounding soft tissues.</li>
                                <li>Most commonly found in children and young adults.</li>
                                <li>Typically develops in the pelvis, legs, or ribs.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                4. Fibrosarcoma and Chordoma
                            </h3>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li>Rare types of bone cancer that primarily affect older adults.</li>
                                <li>Fibrosarcoma originates in soft tissues around the bones, while chordoma occurs in the spine.</li>
                            </ul>


                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Causes and Risk Factors of Bone Cancer
                            </h2>
                            <p className="text-gray-700">The exact cause of bone cancer is not fully understood, but several factors may increase the risk:</p>

                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Genetic Mutations: </strong>Changes in DNA can trigger abnormal cell growth in bones.</li>
                                <li><strong>Family History:</strong> A history of bone cancer in close relatives may increase risk.</li>
                                <li><strong>Radiation Exposure:</strong> High doses of radiation, such as from previous cancer treatments, can lead to bone cancer.</li>

                                <li><strong>Paget’s Disease of Bone:</strong> A condition that causes abnormal bone growth, increasing the risk of developing cancer.</li>

                                <li><strong>Previous Bone Injuries:</strong> Some studies suggest that past bone injuries may play a role in the development of bone tumors.</li>

                            </ul>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Symptoms of Bone Cancer
                            </h2>
                            <p className="text-gray-700">Symptoms of bone cancer vary depending on the tumor’s location, size, and growth rate. Common signs include:</p>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Persistent Bone Pain:</strong>Pain in the affected bone that worsens over time and doesn’t go away with rest.</li>
                                <li><strong>Swelling and Tenderness: </strong> A lump or swelling in the affected area.</li>
                                <li><strong>Fractures (Bone Breaks):</strong> Weakening of the bone can lead to unexpected fractures.</li>
                                <li><strong>Restricted Movement:</strong> Difficulty moving joints near the tumor.</li>
                                <li><strong>Unexplained Weight Loss and Fatigue: </strong>  Cancer can cause a general feeling of weakness.</li>
                            </ul>


                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Diagnosis of Bone Cancer
                            </h2>
                            <p className="text-gray-700">Doctors use several tests to diagnose bone cancer and determine its severity:</p>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>X-ray: </strong>  The first imaging test to check for abnormal growth in bones.</li>
                                <li><strong>MRI and CT Scan: </strong> Provide detailed images to determine the extent of the tumor.</li>
                                <li><strong>Bone Biopsy: </strong> A sample of bone tissue is taken to confirm cancer.</li>
                                <li><strong>Bone Scan:</strong> Detects cancer spread to other bones.</li>
                            </ul>



                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Treatment Options for Bone Cancer
                            </h2>
                            <p className="text-gray-700">Treatment for bone cancer depends on its type, stage, and location. Common treatment options include:</p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                1. Surgery
                            </h3>
                            <p className="text-gray-700">The primary treatment method for bone cancer.</p>
                            <p className="text-gray-700">The goal is to remove the tumor while preserving as much healthy bone as possible.</p>
                            <p className="text-gray-700">In some cases, limb amputation may be necessary if the tumor is too large to be removed safely.</p>


                            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                2. Chemotherapy
                            </h3>
                            <p className="text-gray-700">Uses strong drugs to kill cancer cells or stop their growth.</p>
                            <p className="text-gray-700">Commonly used for osteosarcoma and Ewing’s sarcoma.</p>
                            <p className="text-gray-700">Can be used before surgery (to shrink the tumor) or after surgery (to eliminate remaining cancer cells).</p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                3. Radiation Therapy
                            </h3>
                            <p className="text-gray-700">High-energy radiation targets and destroys cancer cells.</p>
                            <p className="text-gray-700">Often used for tumors that cannot be completely removed with surgery.</p>
                            <p className="text-gray-700">Also helps in reducing pain and improving quality of life for patients with advanced bone cancer.</p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                4. Targeted Therapy
                            </h3>
                            <p className="text-gray-700">A modern treatment approach that specifically attacks cancer cells without harming normal cells.</p>
                            <p className="text-gray-700">Used in some types of bone cancer, like chordoma.</p>


                            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                5. Immunotherapy
                            </h3>
                            <p className="text-gray-700">Helps boost the immune system to fight cancer cells more effectively.</p>
                            <p className="text-gray-700">A promising area of research for future treatments.</p>


                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Prevention of Bone Cancer
                            </h2>
                            <p className="text-gray-700">There is no guaranteed way to prevent bone cancer, but some lifestyle changes may help reduce the risk:</p>

                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Avoid Radiation Overexposure: </strong>  Limit unnecessary exposure to radiation.</li>
                                <li><strong>Maintain a Healthy Diet: </strong> Eat a diet rich in calcium and vitamin D for strong bones.</li>
                                <li><strong>Exercise Regularly: </strong> Physical activity helps maintain healthy bone strength.</li>
                                <li><strong>Avoid Harmful Chemicals: </strong>Reduce exposure to industrial toxins and pollutants.</li>
                                <li><strong>Regular Medical Check-ups: </strong>Early detection of unusual bone pain or swelling can lead to early diagnosis.</li>
                            </ul>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Conclusion
                            </h2>
                            <p className="text-gray-700">
                                Bone cancer is a rare but aggressive disease that requires early diagnosis and timely treatment. Understanding the risk factors and symptoms can help individuals seek medical attention before the cancer progresses. Advances in treatment, such as surgery, chemotherapy, and radiation therapy, have improved survival rates and quality of life for patients.
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

export default Bone