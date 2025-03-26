import React from 'react'
import Image from 'next/image'
import Type from '@/components/common/Type'
const Breast = () => {
    return (
        <div>
            <div className="mx-auto py-6 bg-gray-50">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-7xl relative">
                        <Image
                            src="/typeofcancer/breast.png"
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
                                Breast Cancer:
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed">
                                Breast cancer is one of the most common types of cancer, affecting millions of women worldwide. It occurs when abnormal cells in the breast grow uncontrollably, forming a lump or tumor. While breast cancer is more common in women, men can also develop this disease. Early detection and timely treatment can significantly improve survival rates and quality of life.
                            </p>


                            <h2 className="text-2xl font-semibold text-gray-900 mt-2 mb-3">
                                Causes and Risk Factors of Breast Cancer
                            </h2>
                            <p className="text-gray-700">The exact cause of breast cancer is not always known, but several risk factors increase the likelihood of developing it:</p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
                                1. Genetic Factors
                            </h3>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li>Mutations in genes like BRCA1 and BRCA2 increase the risk of breast cancer.</li>
                                <li>A family history of breast cancer can make a person more susceptible.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
                                2. Hormonal Factors
                            </h3>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li>Increased exposure to estrogen and progesterone due to early menstruation or late menopause.</li>
                                <li>Hormone replacement therapy (HRT) and birth control pills may slightly increase the risk.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
                                3. Lifestyle Factors
                            </h3>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li>Lack of physical activity and obesity contribute to a higher risk.</li>
                                <li>Excessive alcohol consumption and smoking increase the likelihood of breast cancer.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
                                4. Age and Gender
                            </h3>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li>Women over 50 are at a higher risk.</li>
                                <li>Though rare, men can also develop breast cancer.</li>
                            </ul>


                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Symptoms of Breast Cancer
                            </h2>
                            <p className="text-gray-700">Early signs of breast cancer may not always be noticeable, but common symptoms include:</p>

                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Lump in the Breast or Underarm: </strong>A hard, painless lump is often the first sign.</li>
                                <li><strong>Changes in Breast Shape or Size:</strong> One breast may become larger or more swollen.</li>
                                <li><strong>Nipple Discharge:</strong> Fluid, including blood, may leak from the nipple.</li>

                                <li><strong>Skin Changes:</strong>Redness, dimpling, or puckering of the breast skin.</li>

                                <li><strong>Inverted or Retraction of the Nipple:</strong> A nipple that turns inward instead of outward.</li>
                                <li><strong>Persistent Breast Pain:</strong>Unexplained pain that does not go away.</li>
                            </ul>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Diagnosis of Breast Cancer
                            </h2>

                            <p className="text-gray-700">Doctors use several methods to diagnose breast cancer:</p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
                                1. Breast Self-Examination (BSE)
                            </h3>
                            <p className="text-gray-700">Women should check their breasts regularly for any changes or lumps.</p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
                                2. Mammography
                            </h3>
                            <p className="text-gray-700">A low-dose X-ray detects early-stage tumors before symptoms develop.</p>
                            <p className="text-gray-700">Recommended for women above 40 as part of routine screening.</p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
                                3. Ultrasound and MRI
                            </h3>
                            <p className="text-gray-700">Used to get a clearer image of the breast tissue and determine the nature of lumps.</p>


                            <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
                                4. Biopsy
                            </h3>
                            <p className="text-gray-700">A small tissue sample is taken from the breast lump for testing.</p>
                            <p className="text-gray-700">Confirms whether the lump is cancerous.</p>

                            <p className="text-gray-700">Early detection improves the chances of successful treatment.</p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Treatment Options for Breast Cancer
                            </h2>
                            <p className="text-gray-700">Treatment for breast cancer depends on its stage, type, and the patient’s overall health. Common treatment methods include:</p>


                            <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-3">
                                1. Surgery
                            </h3>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Lumpectomy: </strong> Removes only the tumor while preserving most of the breast.</li>
                                <li><strong>Mastectomy: </strong> Removes one or both breasts in severe cases.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
                                2. Radiation Therapy
                            </h3>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li>Uses high-energy rays to destroy cancer cells.</li>
                                <li>Often used after surgery to prevent recurrence.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
                                Chemotherapy                        </h3>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li>Strong drugs are used to kill or slow the growth of cancer cells.</li>
                                <li>Can be administered before or after surgery.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
                                4. Hormone Therapy
                            </h3>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li>Used for hormone-sensitive breast cancer.</li>
                                <li>Blocks estrogen or progesterone to stop cancer growth.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
                                5. Targeted Therapy                   </h3>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li>Focuses on specific cancer cells while sparing healthy cells.</li>
                                <li>Effective for HER2-positive breast cancer patients.</li>
                            </ul>
                            <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
                                Immunotherapy           </h3>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li>Boosts the immune system to help fight cancer cells.</li>
                            </ul>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Prevention of Breast Cancer
                            </h2>
                            <p className="text-gray-700">While breast cancer cannot always be prevented, certain lifestyle changes can reduce the risk:</p>

                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Regular Breast Self-Exams and Screenings: </strong> Early detection improves survival rates.</li>
                                <li><strong>Maintain a Healthy Weight: </strong> Obesity increases the risk of breast cancer.</li>
                                <li><strong>Exercise Regularly: </strong> At least 30 minutes of moderate exercise daily.</li>
                                <li><strong>Limit Alcohol Consumption: </strong> Reduce alcohol intake to lower risk.</li>
                                <li><strong>Avoid Smoking: </strong> Smoking is linked to many types of cancer, including breast cancer.</li>
                                <li><strong>Breastfeeding </strong> Lowers the risk of developing breast cancer.</li>
                                <li><strong>Balanced Diet: </strong> A diet rich in fruits, vegetables, and whole grains supports overall health.</li>
                            </ul>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Conclusion
                            </h2>
                            <p className="text-gray-700">
                                Breast cancer is a serious condition, but early detection and timely treatment can save lives. Understanding risk factors, recognizing symptoms, and adopting a healthy lifestyle can help in prevention. Women should regularly perform self-examinations and go for routine screenings. If you notice any unusual changes, consult a doctor immediately.
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

export default Breast