'use client';



import { CgMenuRound } from "react-icons/cg";

export default function Navabar () {
    return (
        <>
            <nav className="w-full fixed z-50 lg:h-[80px] h-[60px] bg-customeYellow flex items-center justify-between px-20">
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