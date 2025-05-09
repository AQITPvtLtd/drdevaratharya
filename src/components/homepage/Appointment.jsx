import React from 'react';
import Image from 'next/image';
import Form from '@/app/contact/form/Form';

const Appointment = () => {
    return (
        <div className='lg:pt-20'>
            <div className='max-w-8xl mx-auto lg:grid grid-cols-1 lg:grid-cols-12 gap-8 flex flex-col-reverse items-center bg-[#e8fcfc]'>
                {/* Form Section */}
                <div className='lg:col-span-6 flex justify-center'>
                    <div className='w-full max-w-lg rounded-lg p-6 md:p-8'>
                        <h2 className='text-2xl md:text-3xl font-semibold text-gray-800 text-center' style={{ fontFamily: "Roboto Slab, serif" }}>Book an Appointment</h2>
                        <p className='text-gray-600 text-center mb-6'>Fill out the form below to schedule a consultation with us.</p>
                        <Form />
                    </div>
                </div>

                {/* Image Section */}
                <div className='lg:col-span-6'>

                    <Image
                        className='rounded-md w-full '
                        src='/appointment/appointment-bg.png'
                        width={1000}
                        height={1000}
                        alt='Appointment'
                    />

                </div>
            </div>
        </div>
    );
};

export default Appointment;