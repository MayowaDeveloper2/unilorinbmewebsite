'use client';

import { useState } from 'react';
import Image from "next/image";
import unilorin1 from "../images/university of Ilorin.jpeg";
import unilorin2 from "../images/researchunilorin.jpeg";
import unilorin3 from "../images/student reading.jpg";

const images = [
    { src: unilorin1, alt: "", content: (
        <div className="items-center pl-2 pb-2">
            <div className='font-bold text-white text-2xl'>Biomedical Engineering</div>
            <div className='mt-2 font-bold'>MEET OUR FACULTY</div>
            <div className='mt-2'>
                In the Department of Biomedical Engineering, we make significant contributions in science and medicine that include new medical devices, biomaterials, clinical methods, and insights into how living organism function.
                Our department is known for both their contributions to science and their shared passion for teaching and inspiring students to explore new ways to treat disease and keep Nigerians healthy.
            </div>
        </div>
    )},
    { src: unilorin2, alt: "", content: (
        <div className='pl-2 pb-2'>
            <div className='text-white'>The department has been a leader in translational research and the creation and integration of new knowledge across a broad range of areas</div>
            <button className="mt-2 border bg-customeYellow text-white px-3 py-1">Learn more</button>
        </div>
    )},
    { src: unilorin3, alt: "", content: (
        <div className='pl-2 pb-2'>
            <div>The Department of Biomedical Engineering offers an undergraduate program (B.Eng) focusing on the attention on three major areas which include
                Biomedical Instrumentation and Micro/Nano Systems, cell and Tissue Engineering, and Computational Engineering
            </div>
        </div>
    )}
];

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <div className="relative w-full h-[400px] lg:h-[600px]">
                <div className="absolute inset-0">
                    <Image
                        src={images[activeIndex].src}
                        alt={images[activeIndex].alt}
                        layout="fill"
                        objectFit="cover"
                        className={`image-${activeIndex}`}
                    />
                </div>
                <div className="triangle-divider"></div>

                {/* Tabs and Content for large screens */}
                <div className="hidden lg:block absolute bottom-[5px] right-[30px] lg:w-[500px] ">
                    <div className="flex items-center justify-center w-full">
                        <ul className="flex w-full text-white bg-customBlue text-[12px] border">
                            <li className={`w-full border-r-2 ${activeIndex === 0 ? 'bg-yellow-500' : ''}`}>
                                <a className="inline-block p-4 cursor-pointer" onClick={() => setActiveIndex(0)}>BIOMEDICAL ENGINEERING</a>
                            </li>
                            <li className={`w-full border-r-2 ${activeIndex === 1 ? 'bg-yellow-500' : ''}`}>
                                <a className="inline-block p-4 cursor-pointer" onClick={() => setActiveIndex(1)}>RESEARCH</a>
                            </li>
                            <li className={`w-full ${activeIndex === 2 ? 'bg-yellow-500' : ''}`}>
                                <a className="inline-block p-4 cursor-pointer" onClick={() => setActiveIndex(2)}>EDUCATION</a>
                            </li>
                        </ul>
                    </div>
                    <div className='bg-customBlue roboto text-white pt-3 p-5'>
                        {images[activeIndex].content}
                    </div>
                </div>
            </div>

            {/* Tabs and Content for smaller screens */}
            <div className="block lg:hidden w-full">
                <div className="flex items-center justify-center w-full">
                    <ul className="flex w-full text-white bg-customBlue text-[12px] border">
                        <li className={`w-full border-r-2 ${activeIndex === 0 ? 'bg-yellow-500' : ''}`}>
                            <a className="inline-block p-4 cursor-pointer" onClick={() => setActiveIndex(0)}>BIOMEDICAL ENGINEERING</a>
                        </li>
                        <li className={`w-full border-r-2 ${activeIndex === 1 ? 'bg-yellow-500' : ''}`}>
                            <a className="inline-block p-4 cursor-pointer" onClick={() => setActiveIndex(1)}>RESEARCH</a>
                        </li>
                        <li className={`w-full ${activeIndex === 2 ? 'bg-yellow-500' : ''}`}>
                            <a className="inline-block p-4 cursor-pointer" onClick={() => setActiveIndex(2)}>EDUCATION</a>
                        </li>
                    </ul>
                </div>
                <div className='bg-customBlue text-white pt-3 px-3'>
                    {images[activeIndex].content}
                </div>
            </div>

            <style jsx>{`
                .triangle-divider {
                    position: absolute;
                    bottom: 0;
                    width: 0;
                    right: 0;
                    height: 0;
                    border-left: 100vw solid transparent;
                    border-right: 100vw solid transparent;
                    border-bottom: 90px solid #002145; 
                }

                @media (min-width: 1024px) {
                    .triangle-divider {
                        border-bottom-color: white;
                    }
                }
            `}</style>
        </>
    );
}
