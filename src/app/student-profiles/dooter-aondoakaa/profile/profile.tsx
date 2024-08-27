/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import dooterprofile from "../../../images/Dooter Profile.jpeg";

export default function Profile() {
    return(
        <div className='w-full lg:pt-24 pt-20 px-5 lg:px-20'>
            <div className='w-full items-center flex flex-col'>
                <Image className='w-[200px] h-[200px] rounded-full' src={dooterprofile} alt="Dooter Aondoakaa" />
                <span className='text-black font-bold'>Dooter Aondoakaa</span>
                <div className='text-black'>Biomedical Engineering, Class of 2026</div>
            </div>
            <div className='text-black text-[20px] mt-10'>
                <p>Biomedical Engineering department at University of Ilorin proudily unveils the launch of the <span className='font-bold'>'student spotlight'</span>, a
                    compelling collection of narratives highlighting the transformation journey of current student of Unilorin BME.
                </p>
                <p className='mt-3'>
                    These stories explore the profound impact that acquiring top-tier Biomedical Engineering skills through our program has had on individuals lives.
                    We recognise the challenges many face on their pathh to growth, yet Unilorin BME has emerged as a beacon of hope for countless young people in Nigeria, offering affordable quality education
                </p>
                <p className='mt-3'>
                    Through the acquisition of essential skills, our students are empowered to actively engaged in various facets of life, whelther through employment, internships, or overall improvements of livehoods.
                    Today, we are thrilled to introduce our inaugural student spotlight section, featuring one of our current student.
                </p>
                <p className='mt-3'>
                    Meet <span className='font-bold'>Dooter Aondoakaa</span>, a four level student of Biomedical Engineering, and she is currently undergoing her student internship work experience at a reputable health company in Nigeria.
                    She is from Benue state, the food basket of the nation.
                </p>
                <p className='font-bold text-black mt-3'>What inspired you to study Biomedical Engineering (BME) at University of Ilorin?</p>
                <p className='mt-3'>
                    To me, Biomedical Engineering has an allure to it that sets it apart from other fields. The application of engineering principles to medical sciences, to develop practical solutions to improve the healthcare
                    system and quality of life especially in Nigeria inspired me to choose it as my course of study. Biomedical Engineering is the future of healthcare and  I want nothing more than to be a part of that action.
                </p>
                <p className='font-bold text-black mt-3'>We noticed you are doing something related to Bioinformatics, how has your lab work further cemented your engineering focus?</p>
                <p className='mt-3'>
                    Interning at a molecular research laboratory has been an enriching experience. Working hands-on with genomic data and molecular techniques has given me great insights into biological systems and their various complexities.
                    By participating in various projects at the laboratory, I've seen firsthand how Bioinformatics can be applied to real-world problems like the connection between gene mutations and drug resistance, genetic variants associated with
                    diseases and even personalised medicine.
                </p>
                <p className='mt-3'> 
                    The experience has not only enhanced my knowledge of molecular biology but also shown me the usefulness of computational techniques in analyzing biological data.
                </p>
                <p className='font-bold text-black'>Can you tell us advice you want for prospective student in your field?</p>
                <p className='mt-3'>
                    To prospective Biomedical Engineering students I'll say, you have the power to trnasform and impact the healthcare sector so do the extra work to develop relevant practical skills through self learning, internships or projects.
                    Not only will you gain better understanding of theoretical concepts but it will also set you apart and open your mind to more possibilities in the field.
                </p>
                
            </div>

        </div>
    )
}