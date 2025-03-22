import React from 'react'
import ServiceData from './ServiceData'

const page = ({ params }) => {
    const id = params.id;
    console.log(id)
    return (
        <div className='bg-gray-200'>
            <ServiceData id={id} />
        </div>
    )
}

export default page