import React from 'react';
import ServiceData from './ServiceData';

const Page = async ({ params }) => {
    const url = params.url;

    return (
        <div className="bg-gray-200">
            <ServiceData url={url} />
        </div>
    );
};

export default Page;
