import React from 'react'
import Image from "next/image";
import Type from '@/components/common/Type';
const Cervical = () => {
    return (
        <div>
            <div className="mx-auto py-6 bg-gray-50">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-7xl relative">
                        <Image
                            src="/typeofcancer/cervicalcancer.png"
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
                                Cervical Cancer
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed">
                                Cervical cancer is a significant health concern for women worldwide. It develops in the cells of the cervix, the lower part of the uterus that connects to the vagina. This type of cancer is primarily caused by persistent infection with certain strains of the Human Papillomavirus (HPV). However, with early detection and preventive measures, cervical cancer is highly treatable.
                            </p>

                            {/* Causes Section */}
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Causes of Cervical Cancer
                            </h2>
                            <p className="text-gray-700">The primary cause of cervical cancer is an infection with high-risk strains of HPV, a common sexually transmitted virus. Other risk factors include:</p>

                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Weakened Immune System:</strong> Women with compromised immunity such as those with HIV are at higher risk.</li >
                                <li><strong>Smoking</strong> Tobacco use has been linked to cervical cancer as it weakens cervical cells and reduces their ability to fight infections.</li>
                                <li><strong>Long-Term Use of Birth Control Pills: </strong> Some studies suggest that using oral contraceptives for over five years may slightly increase the risk.</li>
                                <li><strong>Multiple Pregnancies:</strong> Women who have had multiple full-term pregnancies may have a higher risk of developing cervical cancer.</li>
                                <li><strong>Family History:</strong> A genetic predisposition may play a role in increasing susceptibility to cervical cancer.</li>
                            </ul>

                            {/* Symptoms */}
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Symptoms of Cervical Cancer
                            </h2>
                            <p className="text-gray-700">In the early stages, cervical cancer may not show any symptoms. However, as the disease progresses, some common symptoms include:</p>

                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Abnormal Vaginal Bleeding:</strong> Bleeding between periods after intercourse or post-menopause can be an early sign.</li >
                                <li><strong>Pelvic Pain: </strong> Persistent pain in the lower abdomen or pelvis.</li>
                                <li><strong>Pain During Intercourse: </strong>Discomfort or pain during sexual activity.</li>
                                <li><strong>Unusual Vaginal Discharge: </strong> Foul-smelling, watery or bloody discharge.</li>
                            </ul>
                            <p className="text-gray-700">If any of these symptoms appear, it is crucial to consult a doctor for early diagnosis and treatment.</p>


                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Prevention of Cervical Cancer
                            </h2>

                            <p className="text-gray-700"> The good news is that cervical cancer is one of the most preventable types of cancer. Here are some ways to reduce the risk:</p>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>HPV Vaccination:</strong> The HPV vaccine effectively protects against the most dangerous strains of the virus. It is recommended for girls and boys from the age of 9 to 26.</li>
                                <li><strong>Regular Pap Smear Tests: </strong>  Routine Pap tests help detect abnormal cervical cells before they turn into cancer. Women should start screening from age 21.</li>
                                <li><strong>Practice Safe Sex: </strong>Using condoms and limiting the number of sexual partners can reduce HPV exposure.</li>
                                <li><strong>Quit Smoking: </strong> Avoiding tobacco products lowers the risk of cervical and other cancers.</li>
                                <li><strong>Maintain a Healthy Lifestyle: </strong> A balanced diet rich in fruits, vegetables, and antioxidants strengthens the immune system.</li >
                            </ul>


                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Treatment Options
                            </h2>
                            <p className="text-gray-700">If diagnosed early, cervical cancer is highly treatable.Treatment options depend on the stage of cancer and may include:</p>

                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Surgery:</strong> Procedures like hysterectomy (removal of the uterus) may be necessary in some cases.</li>
                                <li><strong>Radiation Therapy:</strong> High-energy radiation targets and destroys cancerous cells.</li>
                                <li><strong>Chemotherapy: </strong>Medications help kill or slow the growth of cancer cells.</li>
                            </ul>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Conclusion
                            </h2>
                            <p className="text-gray-700">Cervical cancer is a preventable and treatable disease if detected early. Awareness, vaccination, and regular screening play a crucial role in reducing the risk. By adopting a healthy lifestyle and seeking timely medical advice, women can protect themselves from this life-threatening condition.</p>
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

export default Cervical