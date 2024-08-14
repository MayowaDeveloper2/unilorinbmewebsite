/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';

import unilorinbmestand from "../../images/unilorin.jpg";

export default function About () {
    return (
        <div className='lg:px-20 px-5 pt-24'>
            <div className='text-5xl text-black font-bold bebas'>Who We Are</div>
            <p className='mt-3 text-black text-[20px]'>The Department of Biomedical Engineering was established in the year 2010 to provide academic training for prospective engineers who will integrate
                the emerging principles of modern biology with other basic sciences and engineering to offer solutions for fundamental and applied problems in biology and medicine.
            </p>
            <p className='text-[20px] text-black'>The first coordinator of the department was the late Dr K.F.T Olanlokun and was succeeded by Dr I.K Adegun, Dr K.A. AKande was appointed as the first 
                acting Head of The Department in August 2012, followed by Dr J.F. Opadeji in March 2013.
            </p>
            <div className="w-full  flex flex-col lg:flex-row mt-10">
                <div className="lg:w-1/2 lg:h-[800px]">
                    <Image className='w-[700px] h-[800px] rounded-3xl' src={unilorinbmestand} alt="unilorin bme" />
                    
                </div>
                <div className="lg:w-1/2 lg:h-[800px] mt-4 flex flex-col justify-center">
                    <div className='text-7xl font-bold bebas text-black'>A Blueprint For The Future of Medicine</div>
                    <p className='mt-3 text-[20px] text-black'>At the department of Biomedical Engineering, with great University of Ilorin. We are making sure to train our students with versatile knowledge to enable
                        them innovate and create the most effective integration solutions at the intersection of engineering, medicine and biology.</p>

                </div>

            </div>
        </div>
    )
}