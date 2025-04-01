import React from 'react'
import Image from 'next/image'
import Type from '@/components/common/Type'
const Brain = () => {
    return (
        <div>
            <div className="mx-auto py-12 bg-gray-50">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-7xl px-5 relative">
                        <Image
                            src="/typeofcancer/brain.png"
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
                                Brain Cancer
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed">
                                Brain cancer is a serious condition that occurs when abnormal cells grow uncontrollably in the brain. These cancerous cells form tumors, which can interfere with essential brain functions such as memory, movement, and communication. Brain tumors can be either benign (non-cancerous) or malignant (cancerous), with malignant tumors being more aggressive and life-threatening. While brain cancer is relatively rare compared to other cancers, early diagnosis and treatment can improve survival rates.
                            </p>

                            {/* Causes Section */}
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Causes and Risk Factors of Brain Cancer
                            </h2>
                            <p className="text-gray-700">The exact cause of brain cancer is not always known, but several factors may contribute to its development:</p>

                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Genetic Mutations:</strong> Changes in DNA can cause normal brain cells to grow uncontrollably, forming tumors.</li>
                                <li><strong>Family History:</strong>Individuals with a family history of brain tumors may have a higher risk.</li>
                                <li><strong>Exposure to Radiation: </strong> High doses of ionizing radiation, such as from radiation therapy or nuclear exposure, can increase the risk of brain tumors.</li>
                                <li><strong>Weakened Immune System: </strong> People with weakened immune systems, such as those with HIV/AIDS or organ transplant recipients, are more susceptible.</li>
                                <li><strong>Environmental Toxins: </strong> Prolonged exposure to harmful chemicals, pesticides, or industrial pollutants may contribute to brain tumor development.</li>
                            </ul>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Types of Brain Cancer
                            </h2>
                            <p className="text-gray-700">Brain cancer is classified into different types based on the cells affected:</p>

                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Gliomas: </strong>The most common type, originating in glial cells that support brain function.</li>
                                <li><strong>Meningiomas:</strong> Tumors that develop in the meninges, the protective layers of the brain and spinal cord.</li>
                                <li><strong>Medulloblastomas:</strong> Fast-growing tumors that usually occur in children and affect the cerebellum.</li>

                                <li><strong>Pituitary Tumors:</strong> Develop in the pituitary gland and can affect hormone production.</li>

                                <li><strong>Metastatic Brain Tumors:</strong> Cancers that spread to the brain from other parts of the body, such as lung or breast cancer.</li>

                            </ul>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Symptoms of Brain Cancer
                            </h2>
                            <p className="text-gray-700">The symptoms of brain cancer vary depending on the tumor’s location, size, and growth rate. Some common signs include:</p>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Persistent Headaches:</strong>Frequent and severe headaches, often worse in the morning.</li>
                                <li><strong>Seizures:</strong> Sudden and unexplained seizures, even without a history of epilepsy.</li>
                                <li><strong>Nausea and Vomiting:</strong> Persistent nausea, especially in the morning, can be a sign of increased brain pressure.</li>
                                <li><strong>Vision and Hearing Problems:</strong> Blurred vision, double vision, or hearing loss may occur.</li>
                                <li><strong>Memory and Cognitive Issues: </strong> Difficulty concentrating, confusion, or trouble recalling information.</li>
                                <li><strong>Loss of Balance and Coordination: </strong> Difficulty walking, dizziness, or problems with fine motor skills.</li>
                                <li><strong>Weakness or Numbness: </strong> Paralysis or numbness in one part of the body, often affecting an arm or leg.</li>
                                <li><strong>Speech and Personality Changes: </strong> Difficulty speaking, mood swings, or changes in behavior and personality.</li>
                            </ul>


                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Diagnosis of Brain Cancer
                            </h2>
                            <p className="text-gray-700">To diagnose brain cancer, doctors perform several tests, including:</p>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Neurological Exam: </strong>  Tests reflexes, balance, coordination, and cognitive abilities.</li>
                                <li><strong>Imaging Tests: </strong> MRI (Magnetic Resonance Imaging) and CT (Computed Tomography) scans help detect tumors.</li>
                                <li><strong>Biopsy: </strong> A small sample of brain tissue is taken to determine if the tumor is cancerous.</li>
                                <li><strong>Lumbar Puncture (Spinal Tap):</strong> Examines cerebrospinal fluid for cancer cells.</li>

                            </ul>



                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Treatment Options for Brain Cancer
                            </h2>
                            <p className="text-gray-700">Treatment for brain cancer depends on the type, size, and location of the tumor, as well as the patient’s overall health. Common treatment options include:</p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                1. Surgery
                            </h3>
                            <p className="text-gray-700">If the tumor is accessible, surgeons remove as much of it as possible without damaging healthy brain tissue. In some cases, complete removal is not possible, and additional treatments are needed.</p>


                            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                2. Radiation Therapy
                            </h3>
                            <p className="text-gray-700">High-energy beams are used to destroy cancer cells and shrink tumors. This treatment is often recommended for patients who cannot undergo surgery.</p>


                            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                3. Chemotherapy
                            </h3>
                            <p className="text-gray-700">Cancer-fighting drugs are used to kill tumor cells. Chemotherapy can be administered orally, intravenously, or directly into the cerebrospinal fluid.</p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                4. Targeted Therapy
                            </h3>
                            <p className="text-gray-700">Special drugs target specific cancer cells without harming normal cells, reducing side effects compared to chemotherapy.</p>


                            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                5. Immunotherapy
                            </h3>
                            <p className="text-gray-700">Boosts the body's immune system to help fight cancer cells more effectively.</p>
                            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                6. Supportive Therapies
                            </h3>
                            <p className="text-gray-700">Patients may need medications to manage symptoms such as seizures, swelling, or pain. Physical therapy, speech therapy, and occupational therapy can help improve quality of life after treatment.</p>



                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Prevention of Brain Cancer
                            </h2>
                            <p className="text-gray-700">While there is no guaranteed way to prevent brain cancer, some lifestyle choices may reduce the risk:</p>


                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Avoid Radiation Exposure: </strong> Limit unnecessary exposure to high doses of radiation.</li>
                                <li><strong>Maintain a Healthy Diet: </strong> Eat a balanced diet rich in fruits, vegetables, and whole grains.</li>
                                <li><strong>Exercise Regularly: </strong> Staying physically active promotes overall brain health.</li>
                                <li><strong>Avoid Harmful Chemicals: </strong>  Reduce exposure to toxic chemicals and industrial pollutants.</li>
                                <li><strong>Protect the Head: </strong>Wear helmets when engaging in activities that pose a risk of head injury.</li>
                                <li><strong>Manage Stress: </strong>Practicing relaxation techniques like meditation and yoga can improve brain function.</li>
                                <li><strong>Regular Medical Check-ups: </strong>Routine health screenings can help detect potential issues early.</li>
                            </ul>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Conclusion
                            </h2>
                            <p className="text-gray-700">
                                Brain cancer is a life-threatening disease that requires early diagnosis and aggressive treatment. Although its exact cause is not always known, understanding risk factors and symptoms can help individuals seek timely medical intervention. Advances in medical research have improved treatment options, giving patients a better chance of survival. By leading a healthy lifestyle and staying informed, individuals can take proactive steps to reduce their risk of brain cancer.
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

export default Brain