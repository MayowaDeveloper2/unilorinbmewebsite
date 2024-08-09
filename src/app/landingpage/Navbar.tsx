'use client';


import Image from "next/image";
import unilorinlogo from "../images/unilorinlogo.png";
import { CgMenuRound } from "react-icons/cg";

export default function Navabar () {
    return (
        <>
            <div className="lg:hidden w-full flex flex-col">
                <div className="bg-customBlue w-full h-[128px] flex items-center ps-3">
                    <Image className="lg:w-[200px] lg:h-[100px] w-[100px] h-[50px]" src={unilorinlogo} alt="" />
                    <div className="text-white lg:text-[30px] text-[20px]">University of Ilorin, Ilorin, Nigeria</div>
                </div>
                <div className="bg-customAsh lg:hidden text-white h-[70px] flex flex-col justify-center w-full lg:px-20 px-10">
                    <div className="text-[14px]">Faculty of Engineering and Technology</div>
                    <div className="text-[14px]">The Department of Biomedical Engineering</div>
                </div>
            </div>
            <nav className="w-full lg:h-[80px] h-[60px] bg-customeYellow flex items-center justify-between px-20">
                <ul className="hidden lg:flex lg:gap-5">
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>EDUCATION</li>
                    <li>PEOPLE</li>
                    <li>RESEARCH</li>
                    <li>NEWS</li>
                    <li>PARTNER</li>
                </ul>
                <div className="hidden lg:flex lg:h-[30px] items-center gap-5">
                    <div>Sign up</div>
                    <button className="bg-customBlue px-6 py-1 rounded-3xl justify-center items-center text-white ">Login</button>
                </div>
                <div className= "lg:hidden absolute right-0 px-10 ">
                    <CgMenuRound className="text-white text-[50px]"/>
                </div>
            </nav>
        </>
    )
}