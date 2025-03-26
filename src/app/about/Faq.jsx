"use client";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const faqData = [
    {
        question: "What is cancer?",
        answer: "Cancer is a disease in which some cells in the body grow uncontrollably and spread to other parts. It can occur in any part of the body and requires early diagnosis for effective treatment."
    },
    {
        question: "What are the causes of cancer?",
        answer: "Cancer can be caused by several factors, including:",
        list: [
            "Genetic (hereditary) factors",
            "Smoking and excessive alcohol consumption",
            "Exposure to harmful radiation",
            "Poor diet and unhealthy lifestyle",
            "Certain viral and bacterial infections"
        ]
    },
    {
        question: "Is cancer treatable?",
        answer: "Yes, cancer can often be treated, especially if detected early. Treatment options include:",
        list: ["Surgery", "Chemotherapy", "Radiation therapy", "Immunotherapy", "Targeted therapy"]
    },
    {
        question: "What are the common symptoms of cancer?",
        answer: "Cancer symptoms vary depending on the type and stage, but common signs include:",
        list: ["Unusual lumps or swelling", "Unexplained weight loss", "Extreme fatigue", "Unusual bleeding", "Persistent cough or voice changes"]
    },
    {
        question: "Is every type of cancer life-threatening?",
        answer: "No, not all cancers are life-threatening. If detected early and treated properly, many cancer patients can recover and lead a normal life."
    },
    {
        question: "How can cancer be prevented?",
        answer: "Some preventive measures to reduce cancer risk include:",
        list: [
            "Eating a healthy diet rich in fruits and vegetables",
            "Avoiding smoking and alcohol",
            "Exercising regularly and maintaining a healthy weight",
            "Protecting yourself from excessive sun exposure",
            "Going for regular health checkups and screenings"
        ]
    },
    {
        question: "What is the best diet for cancer patients?",
        answer: "A healthy, balanced diet is essential for cancer patients. It should include:",
        list: [
            "High-protein foods (lentils, paneer, fish, chicken)",
            "Fresh fruits and vegetables",
            "Whole grains (brown rice, oats)",
            "Proper hydration with water and herbal drinks"
        ]
    }
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-6xl mx-auto px-5 py-10">
            <h1 className="text-3xl font-bold text-center mb-8"   style={{ fontFamily: "Roboto Slab, serif" }}>Frequently Asked Questions</h1>
            <div>
                {faqData.map((item, index) => (
                    <div key={index} className="border border-black mb-4 rounded-lg overflow-hidden">
                        <button
                            className="flex justify-between items-center w-full px-5 py-3 font-medium border-black bg-gray-100 hover:bg-gray-200"
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={activeIndex === index}
                        >
                            <span className="font-semibold text-lg text-left w-full">{item.question}</span>
                            <IoMdAdd className={`w-8 h-8 transition-transform ${activeIndex === index ? 'rotate-45' : ''}`} />
                        </button>
                        {activeIndex === index && (
                            <div className="p-5 border-t border-black bg-white">
                                <p className="mb-2 text-left">{item.answer}</p>
                                {item.list && (
                                    <ul className="list-disc list-outside text-left px-2">
                                        {item.list.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;