"use client";
import React from 'react'
import Image from 'next/image'
import Type from '@/components/common/Type'
import { motion } from 'framer-motion';

const Prostate = () => {
    const headingVariant = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };
    return (
        <div>
            <div className=" py-6 bg-gray-50">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-8xl px-5 relative">
                        <Image
                            src="/typeofcancer/prostate_enhanced.png"
                            width={1000}
                            height={500}
                            className="w-full lg:h-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                            alt="Lung Cancer"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:mt-10 mt-4 w-full max-w-7xl">
                        <div className="relative bg-white px-8 py-10 shadow-lg rounded-2xl col-span-9 lg:-mt-40">
                          
                            <motion.h1
                                className="font-bold text-3xl md:text-4xl text-[#f01b77] underline mb-6 text-center"
                                style={{ fontFamily: "Roboto Slab, serif" }}
                                variants={headingVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                Prostate Cancer
                            </motion.h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed">
                                Prostate cancer is one of the most common types of cancer in men. It develops in the prostate, a small gland that produces seminal fluid and plays a vital role in male reproductive health. While prostate cancer can grow slowly in some cases, it can also be aggressive and spread to other parts of the body. Early detection and proper treatment significantly improve survival rates.
                            </p>

                            {/* Causes Section */}
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Causes of Prostate Cancer
                            </h2>
                            <p className="text-gray-700">The exact cause of prostate cancer is not fully understood, but several risk factors can contribute to its development:</p>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Age:</strong> The risk of prostate cancer increases with age, especially after 50.</li>
                                <li><strong>Family History:</strong> Men with a family history of prostate cancer are at a higher risk..</li>
                                <li><strong>Genetic Factors:</strong> Certain inherited gene mutations may increase susceptibility.</li>
                                <li><strong>Dietary Habits: </strong> A diet high in red meat, processed foods, and low in fruits and vegetables may contribute to prostate cancer.</li>
                                <li><strong>Obesity: </strong> Overweight individuals have a higher risk of developing aggressive prostate cancer.</li>
                                <li><strong>Hormonal Imbalance: </strong> High levels of testosterone and other hormones can influence the growth of prostate cells abnormally.</li>
                            </ul>

                            {/* Symptoms */}
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Symptoms of Prostate Cancer
                            </h2>
                            <p className="text-gray-700">In the early stages, prostate cancer may not show any noticeable symptoms. However, as the disease progresses, the following symptoms may appear:</p>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Frequent Urination:</strong> Especially at night (nocturia).</li>
                                <li><strong>Weak Urine Flow:</strong> Difficulty in starting or stopping urination.</li>
                                <li><strong>Blood in Urine or Semen:</strong> A warning sign that requires immediate medical attention.</li>
                                <li><strong>Pain in the Lower Back or Hips: </strong> If cancer spreads, it can cause persistent pain in the pelvic region.</li>
                                <li><strong>Erectile Dysfunction: </strong> Difficulty in achieving or maintaining an erection.</li>
                            </ul>
                            <p className="text-gray-700">Since these symptoms can also be associated with other non-cancerous conditions like an enlarged prostate, it is essential to consult a doctor for an accurate diagnosis.</p>

                            {/* Diagnosis */}
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Prevention of Prostate Cancer
                            </h2>
                            <p className="text-gray-700">Although prostate cancer cannot always be prevented, certain lifestyle changes can reduce the risk:</p>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Healthy Diet:</strong> Include fruits, vegetables, and whole grains while limiting red meat and processed foods.</li>
                                <li><strong>Regular Exercise:</strong> Staying active helps maintain a healthy weight and supports prostate health.</li>
                                <li><strong>Maintaining a Healthy Weight:</strong> Obesity is linked to a higher risk of aggressive prostate cancer.</li>
                                <li><strong>Routine Medical Check-ups:</strong> Regular prostate screenings, such as the PSA (Prostate-Specific Antigen) test, can help detect cancer early.</li>
                                <li><strong>Avoid Smoking and Excess Alcohol:</strong> Both habits can increase the risk of cancer and other serious health conditions.</li>
                            </ul>

                            {/* Treatment */}
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Treatment Options
                            </h2>
                            <p className="text-gray-700">Treatment for prostate cancer depends on the stage and severity of the disease. Some common treatment approaches include:</p>
                            <ul className="list-disc list-outside text-gray-700 mt-2 space-y-2">
                                <li><strong>Active Surveillance: </strong>  If the cancer is slow-growing, doctors may recommend regular monitoring instead of immediate treatment.</li>
                                <li><strong>Surgery:</strong> The removal of the prostate gland (prostatectomy) is a common option for localized cancer.</li>
                                <li><strong>Radiation Therapy:</strong> High-energy rays target and kill cancer cells.</li>
                                <li><strong>Hormone Therapy:</strong> Reduces or blocks testosterone to slow cancer growth.</li>
                                <li><strong>Chemotherapy:</strong>Used for advanced cases when cancer spreads beyond the prostate.</li>
                            </ul>



                            {/* Conclusion */}
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Conclusion
                            </h2>
                            <p className="text-gray-700">
                                Prostate cancer is a serious health concern, but with early detection and appropriate treatment, survival rates are high. Men over 50 should undergo regular screenings and adopt a healthy lifestyle to reduce their risk. Awareness, timely diagnosis, and preventive measures can help fight prostate cancer effectively.
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

export default Prostate