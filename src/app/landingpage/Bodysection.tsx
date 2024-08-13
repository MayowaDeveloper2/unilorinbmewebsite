/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import cardimage1 from '../images/prospectivestudnet.jpg';
import cardimage2 from '../images/currentstudents.jpg';
import cardimage3 from '../images/facultyresearch.jpg';
import cardimage4 from '../images/alumnistories.jpg';
import cardimage5 from '../images/studentstories.jpg';
import ourprograms from '../images/biomedicalatwork.jpeg';
import educationalresources from '../images/young-student-looking-book-library.jpg';
import ourinnovations from '../images/a-travel-mobility-scooter-with-a-shopping-cart.webp';
import bmeevent from '../images/bme event.jpg';
import { FaRegCalendarDays } from 'react-icons/fa6';
import { GoClock } from 'react-icons/go';
import { FaQuoteLeft } from 'react-icons/fa';
import dooter from '../images/dooter.jpeg';
import { Poppins } from 'next/font/google';
import arrowright from '../images/arrowright.png';
import { BiSolidChevronRightCircle, BiSolidChevronLeftCircle } from 'react-icons/bi';

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
});

const cardimages = [
    { src: cardimage1, alt: 'cardimage', content: 'Prospective Students' },
    { src: cardimage2, alt: 'cardimage', content: 'Current Students' },
    { src: cardimage3, alt: 'cardimage', content: 'Faculty & Research' },
    { src: cardimage4, alt: 'cardimage', content: 'Alumni Stories' },
    { src: cardimage5, alt: 'cardimage', content: 'Student Stories' },
];

export default function Bodysection() {
    const [currentCard, setCurrentCard] = useState<number>(0);

    const nextCard = () => {
        setCurrentCard((prevIndex) => (prevIndex < cardimages.length - 1 ? prevIndex + 1 : prevIndex));
    };

    const prevCard = () => {
        setCurrentCard((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };

    return (
        <>
            <div>
                <div className="w-full mt-4 mb-4 flex flex-col md:flex-row lg:pl-10">
                    <div className="lg:w-1/2 w-full md:w-full ">
                        <div className='josefin text-4xl text-black'>For the benefit of advancing careers in health care</div>
                        <div className='roboto text-[20px] text-black'>We help young individual soars by advancing careers in health care through innovations and excellence</div>
                    </div>
                    <div className="lg:w-1/2 md:w-full  flex-row flex overflow-x-auto no-scrollbar relative">
                        {currentCard > 0 && (
                            <div className='absolute left-0 z-10 hidden lg:block top-1/2 transform -translate-y-1/2'>
                                <BiSolidChevronLeftCircle size={40} onClick={prevCard} className='text-white' />
                            </div>
                        )}
                        <div className="flex flex-row relative">
                            {cardimages.map((cardimage, index) => (
                                <div
                                    className={`relative lg:min-w-[400px] min-w-[300px] h-[400px] ${index === 0 ? 'ml-10' : ''} ${index === cardimages.length - 1 ? 'mr-2 lg:mr-10' : 'lg:mr-5 mr-3'}`}
                                    key={index}
                                    style={{
                                        transform: `translateX(-${currentCard * 85}%)`,
                                        transition: 'transform 0.5s ease-in-out',
                                    }}
                                >
                                    <Image className="rounded-3xl w-full h-full" src={cardimage.src} alt={cardimage.alt} />
                                    <button className="px-3 bottom-2 left-5 absolute py-2 bg-black text-white flex items-center">
                                        {cardimage.content} <Image className="w-[30px] h-[30px]" src={arrowright} alt="arrow" />
                                    </button>
                                </div>
                            ))}
                        </div>
                        {currentCard < cardimages.length - 1 && (
                            <div className='absolute right-0 z-10 hidden lg:block top-1/2 transform -translate-y-1/2'>
                                <BiSolidChevronRightCircle size={40} onClick={nextCard} className='text-white' />
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-customBlue flex w-full justify-center">
                    <div className="text-center justify-center w-full">
                        <div className="text-white mt-7 text-2xl font-bold mb-5">Explore</div>
                        <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-auto gap-4 mb-10">
                            <div className="text-center">
                                <Image className="w-[300px] h-[200px]" src={ourprograms} alt="ourprogram" />
                                <button className="bg-customeYellow w-[300px] underline text-white h-[40px]">Our Programs</button>
                            </div>
                            <div className="text-center">
                                <Image className="w-[300px] h-[200px]" src={educationalresources} alt="educational resources" />
                                <button className="bg-customeYellow w-[300px] underline text-white h-[40px]">Educational Resources</button>
                            </div>
                            <div className="text-center">
                                <Image className="w-[300px] h-[200px]" src={ourinnovations} alt="ourinnovations" />
                                <button className="bg-customeYellow w-[300px] underline text-white h-[40px]">Our Innovations</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex mt-3 mb-3 flex-col lg:flex-row lg:px-20 px-10">
                    <div className="flex-col w-[340px] lg:w-full flex">
                        <div className="text-2xl text-black font-bold mb-4">Upcoming Events</div>
                        <div className="flex flex-col lg:flex-row">
                            <Image src={bmeevent} alt="" className="lg:w-[400px] mb-4 rounded-3xl lg:mb-0" />
                            <div className="flex flex-col lg:items-center lg:justify-center lg:ml-4">
                                <div className="text-lg text-black font-semibold mb-4 lg:mb-0 lg:mr-4">
                                    1ST Department Lecture, Symposium, and Biomedical Engineering Exhibition (BMEX)
                                </div>
                                <div className="border-b-2 border-gray-300 my-4"></div>
                                <div className="w-full text-black pl-4 flex">
                                    <span className="flex items-center mr-7">
                                        <FaRegCalendarDays className="mr-2" /> 2 - 4 August, 2024
                                    </span>
                                    <span className="flex items-center">
                                        <GoClock className="mr-2" /> 10:00am
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row bg-customBlue">
                    <div className="flex flex-col lg:flex-row">
                        <Image className="lg:w-[800px]" src={dooter} alt="dooter" />
                        <div className="flex-col px-3">
                            <div className="text-white lg:text-2xl font-bold mt-3">Student Spotlight</div>
                            <FaQuoteLeft className="text-customeYellow text-5xl mt-7" />
                            <span className="w-[300px] lg:text-4xl text-white">
                                Pursuing a degree in Biomedical Engineering at the University of Ilorin has taught me to be resilient as the course seems highly technical. I want to make lasting solutions to problems in the healthcare sector with my skills acquired in Bioinformatics, and others
                            </span>
                            <div className="mt-7 text-white lg:mt-96">
                                <div className="font-bold">Dooter Aondoakaa</div>
                                <div>Biomedical Engineering, class of 2023</div>
                                <button className="border-customeYellow mt-4 mb-4 border px-2 py-1">FULL PROFILE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
