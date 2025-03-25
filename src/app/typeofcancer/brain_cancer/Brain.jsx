import React from 'react'
import Image from 'next/image'
const Brain = () => {
    return (
        <div>
            <div className="mx-auto py-12 bg-gray-50">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-7xl relative">
                        <Image
                            src="/typeofcancer/blood.avif"
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
                                <li><strong>Meningiomas:</strong> A more common type that includes various subtypes, affecting B-cells or T-cells.</li>
                                <li><strong>Medulloblastomas::</strong> A more common type that includes various subtypes, affecting B-cells or T-cells.</li>

                                <li><strong>Pituitary Tumors:</strong> A more common type that includes various subtypes, affecting B-cells or T-cells.</li>

                                <li><strong>Metastatic Brain Tumors::</strong> A more common type that includes various subtypes, affecting B-cells or T-cells.</li>

                            </ul>


                            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                3. Myeloma
                            </h3>
                            <p className="text-gray-700">Myeloma, also known as multiple myeloma, affects plasma cells in the bone marrow. These cells produce antibodies to fight infections, but in myeloma, abnormal plasma cells multiply uncontrollably, weakening the immune system and bones.</p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Causes and Risk Factors of Blood Cancer
                            </h2>
                            <p className="text-gray-700">The exact cause of blood cancer is not always known, but several risk factors can increase the likelihood of developing the disease:</p>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Genetic Mutations:</strong>Abnormal changes in DNA can lead to uncontrolled cell growth.</li>
                                <li><strong>Family History:</strong> Individuals with a family history of blood cancer have a higher risk.</li>
                                <li><strong>Exposure to Radiation and Chemicals:</strong> High exposure to radiation, benzene, or industrial chemicals can increase risk.</li>
                                <li><strong>Weakened Immune System:</strong> Conditions like HIV/AIDS or immune suppression due to organ transplants can contribute to blood cancer.</li>
                                <li><strong>Certain Infections: </strong> Some viruses, such as the Epstein-Barr virus (EBV) and human T-cell leukemia virus (HTLV-1), are linked to blood cancers.</li>
                                <li><strong>Smoking and Unhealthy Lifestyle: </strong> Smoking, excessive alcohol consumption, and a poor diet can weaken the immune system and increase cancer risk.</li>
                            </ul>


                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Symptoms of Blood Cancer
                            </h2>
                            <p className="text-gray-700">The symptoms of blood cancer can vary depending on the type, but some common signs include:</p>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Persistent Fatigue and Weakness: </strong> The body produces fewer healthy blood cells, leading to low energy levels.</li>
                                <li><strong>Frequent Infections and Fever: </strong> A weakened immune system makes the body more vulnerable to infections.</li>
                                <li><strong>Unexplained Weight Loss: </strong> Cancer cells consume more energy, leading to sudden weight loss.</li>
                                <li><strong>Swollen Lymph Nodes:</strong> Painless swelling in the neck, armpits, or groin may indicate lymphoma.</li>
                                <li><strong>Easy Bruising or Bleeding:</strong> Low platelet count can cause frequent nosebleeds, gum bleeding, and easy bruising.</li>
                                <li><strong>Bone Pain: </strong> Myeloma often causes pain in the bones, especially in the back and ribs.</li>
                                <li><strong>Night Sweats: </strong>Excessive sweating at night can be an early sign of lymphoma or leukemia.</li>
                                <li><strong>Shortness of Breath: </strong> Low red blood cell count (anemia) can make it difficult to breathe properly.</li>
                            </ul>



                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Diagnosis of Blood Cancer
                            </h2>
                            <p className="text-gray-700">To detect blood cancer, doctors perform various tests, including:</p>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Complete Blood Count (CBC): </strong> Measures red blood cells, white blood cells, and platelet levels.</li>
                                <li><strong>Bone Marrow Biopsy: </strong> A sample of bone marrow is taken to check for cancerous cells.</li>
                                <li><strong>Lymph Node Biopsy: </strong> Examines lymphatic tissue for lymphoma.</li>
                                <li><strong>Molecular and Genetic Tests: </strong>  Identifies specific mutations linked to blood cancer.</li>
                                <li><strong>Imaging Tests (CT, MRI, PET Scans): </strong>Helps determine the spread of cancer in the body.</li>
                            </ul>
                            <p className="text-gray-700">
                                Early diagnosis increases the chances of successful treatment.
                            </p>


                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Treatment Options for Blood Cancer
                            </h2>
                            <p className="text-gray-700">The treatment of blood cancer depends on the type and stage of the disease. Common treatment options include:</p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                1. Chemotherapy
                            </h3>
                            <p className="text-gray-700">Drugs are used to kill cancer cells or stop their growth. It is often the first line of treatment for leukemia and lymphoma.</p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                2. Radiation Therapy

                            </h3>
                            <p className="text-gray-700">High-energy radiation targets and destroys cancer cells, often used for lymphoma or before a bone marrow transplant.</p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                3. Immunotherapy
                            </h3>
                            <p className="text-gray-700">This treatment boosts the body’s immune system to fight cancer cells more effectively.</p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                4. Targeted Therapy
                            </h3>
                            <p className="text-gray-700">Drugs specifically target cancer cells without harming normal cells. This is often used for specific genetic mutations in blood cancer.</p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                5. Bone Marrow or Stem Cell Transplant
                            </h3>
                            <p className="text-gray-700">Replaces damaged bone marrow with healthy stem cells from a donor or the patient’s own body. This is often used for leukemia and myeloma patients.</p>


                            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Prevention of Blood Cancer
                            </h3>
                            <p className="text-gray-700">Although some risk factors cannot be controlled, certain lifestyle changes can help reduce the chances of developing blood cancer:</p>

                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Maintain a Healthy Diet: </strong> Eat a balanced diet rich in fruits, vegetables, and whole grains to boost immunity.</li>
                                <li><strong>Exercise Regularly: </strong> Staying physically active helps maintain a healthy weight and reduces cancer risk.</li>
                                <li><strong>Avoid Smoking and Limit Alcohol Consumption: </strong> Both are linked to increased cancer risk.</li>
                                <li><strong>Reduce Exposure to Harmful Chemicals: </strong> Avoid prolonged exposure to benzene, pesticides, and industrial chemicals.</li>
                                <li><strong>Stay Hydrated and Get Enough Sleep: </strong>Proper hydration and rest help the body function properly.</li>
                                <li><strong>Regular Health Check-ups: </strong>Early detection through routine medical screenings can improve treatment outcomes.</li>
                                <li><strong>Manage Stress: </strong>High stress levels can weaken the immune system, so practicing relaxation techniques like meditation and yoga is beneficial.</li>
                            </ul>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Conclusion
                            </h2>
                            <p className="text-gray-700">
                                Blood cancer is a life-threatening disease, but with early detection, modern treatments, and preventive measures, the chances of survival have improved significantly. Raising awareness, maintaining a healthy lifestyle, and seeking timely medical advice can help reduce the risk of blood cancer and improve overall well-being.                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brain