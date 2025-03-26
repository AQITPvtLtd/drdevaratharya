import React from "react";
import Image from "next/image";
import Type from "@/components/common/Type";
const Lung = () => {
    return (
        <div className="mx-auto py-6 bg-gray-50">
            <div className="flex flex-col items-center">
                {/* Image Section */}
                <div className="w-full max-w-7xl relative">
                    <Image
                        src="/typeofcancer/lungcancer.png"
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
                            Lung Cancer
                        </h1>

                        {/* Introduction */}
                        <p className="text-gray-700 leading-relaxed">
                            Lung cancer is one of the most common and serious types of cancer worldwide. It occurs when abnormal cells grow uncontrollably in the lungs, forming tumors that can spread. While smoking is the leading cause, other factors like pollution, secondhand smoke, and genetics also play a role.
                        </p>

                        {/* Causes Section */}
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                            Causes of Lung Cancer
                        </h2>
                        <p className="text-gray-700">The leading cause of lung cancer is tobacco smoking, responsible for approximately 85% of cases. Other causes include:</p>
                        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                            <li><strong>Exposure to Secondhand Smoke:</strong> Non-smokers inhaling tobacco smoke are at risk.</li>
                            <li><strong>Air Pollution:</strong> Prolonged exposure to pollutants increases the chances.</li>
                            <li><strong>Radon Gas:</strong> A radioactive gas that accumulates in enclosed spaces.</li>
                            <li><strong>Asbestos & Other Chemicals:</strong> Work-related exposure can be hazardous.</li>
                            <li><strong>Genetic Factors:</strong> A family history may increase the risk.</li>
                        </ul>

                        {/* Symptoms */}
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                            Symptoms of Lung Cancer
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                            <li>Persistent cough that worsens over time</li>
                            <li>Coughing up blood (hemoptysis)</li>
                            <li>Shortness of breath</li>
                            <li>Chest pain, especially with deep breaths</li>
                            <li>Unexplained weight loss and fatigue</li>
                            <li>Recurrent respiratory infections</li>
                        </ul>

                        {/* Diagnosis */}
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                            Diagnosis of Lung Cancer
                        </h2>
                        <p className="text-gray-700">Doctors use several methods to diagnose lung cancer, including:</p>
                        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                            <li><strong>Imaging Tests:</strong> X-rays, CT scans, and PET scans help detect tumors.</li>
                            <li><strong>Sputum Cytology:</strong> Examining mucus for cancer cells.</li>
                            <li><strong>Biopsy:</strong> A tissue sample analyzed in the lab.</li>
                            <li><strong>Bronchoscopy:</strong> A camera-inspected lung examination.</li>
                        </ul>

                        {/* Treatment */}
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                            Treatment Options for Lung Cancer
                        </h2>
                        <p className="text-gray-700">Treatment depends on cancer type, stage, and patient health. Common treatments include:</p>
                        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                            <li><strong>Surgery:</strong> Removing affected lung tissue.</li>
                            <li><strong>Radiation Therapy:</strong> High-energy rays target cancer cells.</li>
                            <li><strong>Chemotherapy:</strong> Drugs used in advanced stages.</li>
                            <li><strong>Targeted Therapy:</strong> Medications focusing on cancer growth.</li>
                            <li><strong>Immunotherapy:</strong> Boosts immune response to fight cancer.</li>
                        </ul>

                        {/* Prevention */}
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                            Prevention & Lifestyle Changes
                        </h2>
                        <p className="text-gray-700">Reduce lung cancer risk with these steps:</p>
                        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                            <li>Quit smoking & avoid secondhand smoke.</li>
                            <li>Reduce exposure to air pollution & workplace chemicals.</li>
                            <li>Test homes for radon gas.</li>
                            <li>Maintain a diet rich in fruits & vegetables.</li>
                            <li>Get regular medical check-ups for early detection.</li>
                        </ul>

                        {/* Conclusion */}
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                            Conclusion
                        </h2>
                        <p className="text-gray-700">
                            Lung cancer remains a serious health concern, but early detection and advanced treatments have improved survival rates. Raising awareness can help reduce its impact. If you or a loved one experiences persistent symptoms, consult a doctor as soon as possible.
                        </p>
                    </div>

                    <div className="col-span-3 sticky top-20">
                        <Type />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lung;
