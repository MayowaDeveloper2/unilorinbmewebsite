/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import Image from 'next/image';
import bmegenebankwebsite from '../../images/bmegenebank.png';

export default function Ourinnovations() {
    return(
        <div className='w-full lg:px-20 px-5 top-4'>
            <div className='text-black text-4xl font-bold pt-20'>Our Innovations</div>
            <div className='font-bold text-lg' >Individual or Group Students Projects</div>
            <p className='text-black mt-2 lg:w-[800px] '>Each year we have up to 20 final year projects, significant number of which are sponsored by the student themselves
            </p>
            <p className='text-black mt-2 lg:w-[800px]'>Our Biomedical Engineering students apply the engineering skills they have acquired, the principles of design, how ethics affect Engineering decision, how professionals
                communicate ideas and the day-to-day implications of intellectual property.
            </p>
            <p className='text-black mt-2 lg:w-[800px]'>They began by researching the statement problem, brainstorming a range of solutions, they contact with their supervisor, hold virtual or physical meetings, and make presentation of their work.
            </p>
            <p className='text-black mt-2 lg:w-[800px]'>Biomedical Engineering Students submit typed reports at intervals throughout the two semester project timeline, and at the end present their solutions at the project defense day</p>
            <div className='w-full flex flex-col mt-4'>
                <div className='font-bold text-2xl text-black'>List of the unique projects done so far by our students</div>
            </div>
            <div className='flex flex-col lg:flex-row lg:px-20 px-5  gap-10 mt-4'>
                <div className='lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] border rounded-3xl'>
                    <Image className='lg:w-[400px] lg:h-[300px] w-[300px] h-[200px]  rounded-3xl' src={bmegenebankwebsite} alt="unilorin bme genebank website" />
                    <div className='bg-customBlue lg:w-[400px] text-white text-center lg:h-[100px] w-[300px] h-[100px] justify-center flex flex-col'>
                        <div>Unilorin Gene Bank Website</div>
                        <div className='underline'>
                            <a href="https://bmegenebank.bmeunilorin.com.ng/" target="_blank" rel="noopener noreferrer">
                                Visit website
                            </a>
                        </div>
                    </div>

                </div>
                <div className='lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] border rounded-3xl'>
                    <Image className='lg:w-[400px] lg:h-[300px] w-[300px] h-[200px]  rounded-3xl' src={bmegenebankwebsite} alt="unilorin bme genebank website" />
                    <div className='bg-customBlue lg:w-[400px] text-white text-center lg:h-[100px] w-[300px] h-[100px] justify-center flex flex-col'>
                        <div>Unilorin Gene Bank Website</div>
                        <div className='underline'>
                            <a href="https://bmegenebank.bmeunilorin.com.ng/" target="_blank" rel="noopener noreferrer">
                                Visit website
                            </a>
                        </div>
                    </div>

                </div>
                

            </div>
        </div>

    )
}