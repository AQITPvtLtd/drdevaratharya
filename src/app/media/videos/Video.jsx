import React from 'react';

const Video = () => {
    const videos = [
        "ROFQBS6Eics",
        "IUcW5RZe93k",
        "jL54KamGTdc",
        "R8nMDftycLU",
        "EEBq56Zg3H8",
        "G7RwxLRZ-ow"
    ];

    return (
        <div className='container mx-auto p-4'>
            <p className='text-center text-6xl font-semibold'>Our Videos</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5'>
                {videos.map((videoId, index) => (
                    <div key={index} className='w-full aspect-w-16 lg:h-72'>
                        <iframe
                            className='w-full h-full rounded-lg shadow-lg'
                            src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                            title={`YouTube video player ${index + 1}`}
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Video;
