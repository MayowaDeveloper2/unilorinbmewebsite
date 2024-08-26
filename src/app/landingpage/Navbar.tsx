'use client';

import { useState } from "react";
import Link from 'next/link';

import DragHandleIcon from '@mui/icons-material/DragHandle';
import { CloseRounded } from "@mui/icons-material";

export default function Navabar () {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <nav className="w-full fixed z-50 lg:h-[80px] h-[60px] bg-customeYellow flex items-center justify-between lg:px-20 px-10">
                <div>
                    <div> <Link href="/">DEPARTMENT OF BIOMEDICAL ENGINEERING</Link></div>
                </div>
                <ul className="hidden lg:flex lg:gap-5">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="../about">ABOUT</Link>
                    </li>
                    <li>
                        <Link href="../prospective-students/">EDUCATION</Link>
                    </li>
                    <li>PEOPLE</li>
                </ul>
                <div className="hidden lg:flex lg:h-[30px] items-center gap-5">
                    <div>Sign up</div>
                    <button className="bg-customBlue px-6 py-1 rounded-3xl justify-center items-center text-white ">Login</button>
                </div>
                <div className="lg:hidden" onClick={handleToggle}>
                    {isOpen ? <CloseRounded className="text-customPurple text-[20px]" /> : <DragHandleIcon className="text-customPurple text-4xl" />}
                </div>
            </nav>
            {isOpen && (
                <div className="lg:hidden fixed top-12  bg-customeYellow w-full h-[screen] z-40 flex flex-col ">
                    <ul className="flex flex-col  text-black gap-3 p-3 cursor-pointer ml-6">
                        <li onClick={handleToggle}>HOME</li>
                        <li onClick={handleToggle}>
                            <Link href="../about">ABOUT</Link>
                        </li>
                        <li onClick={handleToggle}>
                            <Link href="../prospective-students/">EDUCATION</Link>
                        </li>
                        <li onClick={handleToggle}>PEOPLE</li>
                    </ul>
                    <div className="flex flex-row p-3 gap-3 ml-6">
                        <button onClick={handleToggle} className="border-2 text-customBlue font-bold cursor-pointer rounded-3xl border-customBlue px-3 py-1">Sign up</button>
                        <button onClick={handleToggle} className="border-2 text-customBlue font-bold cursor-pointer rounded-3xl border-customBlue px-3 py-1">Log in</button>
                    </div>
                </div>
            )}
        </>
    )
}