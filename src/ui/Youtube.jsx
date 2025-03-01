
'use client'
import Image from 'next/image';
import React, { useState } from 'react';
const YoutubeEmbed = ({ videoId, title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const loadVideo = () => {
        setIsLoaded(true);
    };

    return (
        <div onClick={loadVideo} className='relative cursor-pointer'>
            {
                !isLoaded ?
                    <>
                        <Image
                            src={`https://img.youtube.com/vi/AKNRRcI6YCc/hqdefault.jpg`}
                            alt={'Janitorial Appointments video'}
                            width={503}
                            height={283}
                            className='object-cover aspect-[16/9] block z-20'
                        />
                        {/* 🎯 Play Button Overlay */}
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                backgroundColor: "rgba(0, 0, 0, 0.7)",
                                color: "#fff",
                                padding: "20px",
                                borderRadius: "50%",
                                fontSize: "24px",
                                textAlign: "center",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "60px",
                                height: "60px",
                            }}
                        >
                            ▶
                        </div>
                    </>
                    :
                    <>
                        <iframe width="503" height="283" src="https://www.youtube.com/embed/AKNRRcI6YCc?si=RB_A4ATkNveKns-i" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </>
            }
        </div>
    );
};

export default YoutubeEmbed;
