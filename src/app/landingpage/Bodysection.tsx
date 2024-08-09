

/* eslint-disable react/no-unescaped-entities */ 

import Image from "next/image";
import cardimage1 from "../images/image-beautiful-cheerful-girl-with-toothy-smile-writes-notes-notebook-with-pencil.jpg";
import cardimage2 from "../images/friends-learning-study-group.jpg";
import cardimage3 from "../images/african-american-woman-scientist-holding-test-tube-laboratory.jpg";
import cardimage4 from "../images/young-afro-american-student-sitting-grass-with-laptop-near-campus.jpg";
import cardimage5 from "../images/portrait-young-woman-with-laptop-hands-outside-school.jpg";
import ourprograms from "../images/biomedicalatwork.jpeg";
import educationalresources from "../images/young-student-looking-book-library.jpg";
import ourinnovations from "../images/a-travel-mobility-scooter-with-a-shopping-cart.webp";
import bmeevent from "../images/bme event.jpg";
import { FaRegCalendarDays } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { FaQuoteLeft } from "react-icons/fa";
import dooter from "../images/dooter.jpeg";
import Newspost from "./news";



const cardimages = [
    { src: cardimage1, alt: "cardimage", content: "Prospective Students" },
    { src: cardimage2, alt: "cardimage", content: "Current Students" },
    { src: cardimage3, alt: "cardimage", content: "Faculty & Research" },
    { src: cardimage4, alt: "cardimage", content: "Alumni Stories" },
    { src: cardimage5, alt: "cardimage", content: "Student Stories" },
];

export default function Bodysection() {
    return (
        <>
            
            <div>
                <div className="flex lg:items-center lg:justify-center lg:mt-10 flex-row overflow-x-auto space-x-4 p-4">
                    {cardimages.map((cardimage, index) => (
                        <div key={index} className="relative min-w-[300px] h-[200px]">
                            <Image
                                src={cardimage.src}
                                alt={cardimage.alt}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-3xl"
                            />
                            <span className="absolute bottom-[15px] right-[15px] text-white bg-black bg-opacity-50 px-2 py-1 rounded-lg">
                                {cardimage.content}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="bg-customBlue flex w-full justify-center">
                    <div className="text-center justify-center w-full" >
                        <div className="text-white mt-7  text-2xl font-bold mb-5">Explore</div>
                        <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-auto gap-4 mb-10">
                            <div className="text-center">
                                <Image className="w-[300px] h-[200px]" src={ourprograms} alt="ourprogram" />
                                <button className="bg-customeYellow w-[300px] underline text-white h-[40px]">Our Programs</button>
                            </div>
                            <div className="text-center">
                                <Image className="w-[300px] h-[200px]"  src={educationalresources} alt="educational resources"  />
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
                        <div className="flex  flex-col lg:flex-row ">
                            <Image src={bmeevent} alt="" className="lg:w-[400px] mb-4 rounded-3xl lg:mb-0" />
                            <div className="flex flex-col lg:items-center lg:justify-center lg:ml-4">
                                <div className="text-lg text-black font-semibold mb-4 lg:mb-0 lg:mr-4">
                                    1ST Department Lecture, Symposium, and Biomedical Engineering Exhibition (BMEX)
                                </div>
                                <hr className="h-px my-8 border-0 dark:bg-gray-700"></hr>
                                <div className="w-full text-black pl-4 flex">
                                    <span className="flex items-center mr-7"> 
                                        <FaRegCalendarDays className="mr-2 "/> 2 - 4 August, 2024
                                    </span>
                                    <span className="flex items-center">
                                        <GoClock className="mr-2"/> 10:00am
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
                            <FaQuoteLeft className="text-customeYellow text-5xl mt-7"/>
                            <span className="w-[300px] lg:text-4xl text-white"> Pursing a degree in Biomedical Engineering at Univerisity of Ilorin has taught me to be resilence as the course seem highly technical. I want to make lasting solution to problens in the healthcare sector with my skills acquired in Bioinformatics, and others</span>
                            <div className="mt-7 text-white lg:mt-96">
                                <div className="font-bold">Dooter Aondoakaa</div>
                                <div>Biomedical Engineering, class of 2023</div>
                                <button className="border-customeYellow mt-4 mb-4 border px-2 py-1">FULL PROFILE</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mt-5 px-5 lg:px-20">
                    <div>
                        <div className="text-2xl text-black font-bold mb-4 ml-4">NEWS</div>
                        <Newspost/>
                    </div>
                </div>
                <div className="mt-6 mb-6 w-full h-[400px] px-5 md:px-3 lg:px-20  flex">
                    <div className="flex h-full items-center flex-col lg:flex-row">
                        <iframe
                            className="w-[300px] lg:w-[700px] md:w-[400px] rounded-3xl h-64 md:h-80 lg:h-96"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                            src="https://www.youtube.com/embed/IJ_14huTj6E?autoplay=1&mute=1"
                        />
                        <div className="w-[350px] lg:w-[600px] md:w-[400px] ml-5 text-2xl font-bold mt-4 lg:mt-0">Welcome Message From The Head of Department of Biomedical Engineering</div>

                    </div>
                </div>
                
            </div>
        </>
    );
}
