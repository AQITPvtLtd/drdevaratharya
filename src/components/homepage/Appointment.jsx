import React from 'react';
import Image from 'next/image';

const Appointment = () => {
    return (
        <div className='max-w-full grid grid-cols-1 lg:grid-cols-12 mt-20'>
            {/* Form Section */}
            <div className='lg:col-span-6 bg-[#f8fcf4] p-8'>
                <div className='max-w-lg mx-auto'>
                    <span className='bg-white p-2 rounded-md inline-block'>Book an appointment</span>
                    <p className='mt-4 font-semibold text-3xl md:text-5xl leading-tight'>Book an appointment for consultation</p>
                    <form className='mt-6 space-y-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <input className='bg-white p-3 w-full rounded-md border' placeholder='Your Name' type='text' />
                            <input className='bg-white p-3 w-full rounded-md border' placeholder='Phone Number' type='text' />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <input className='bg-white p-3 w-full rounded-md border' placeholder='Email Address' type='email' />
                            <input className='bg-white p-3 w-full rounded-md border' placeholder='Enter Your Location' type='text' />
                        </div>
                        <textarea className='bg-white p-3 w-full rounded-md border' placeholder='Describe Health Problem...' rows='4'></textarea>
                        <input className='block w-full text-gray-700' type='file' />
                        <button className='w-full bg-[#fa3e93] text-white border-2 border-[#fa3e93] rounded-md py-3 font-semibold hover:bg-white hover:text-black transition'>Submit</button>
                    </form>
                </div>
            </div>

            {/* Image Section */}
            <div className='lg:col-span-6 flex items-center justify-center bg-[#e8fcfc]'>
                <Image className='rounded-md w-full max-w-md' src='/appointment/appointment-bg.png' width={1000} height={1000} style={{ maxWidth: '600px', height: 'auto' }} alt='Appointment' />
            </div>
        </div>
    );
};

export default Appointment;
