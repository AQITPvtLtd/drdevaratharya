import React from 'react';
import ServiceData from './ServiceData';
import { items } from '@/data/services';
// ✅ Dynamic Metadata
export async function generateMetadata({ params }) {
    const content = items.find((item) => item.url === params.url);


    return {
        title: content.meta_title,
        description: content.meta_desc,
        keywords: content.keyword,
    };
}

const Page = async ({ params }) => {
    const url = params.url;
    return (
        <div className="bg-gray-200">
            <ServiceData url={url} />
        </div>
    );
};

export default Page;
