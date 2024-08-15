import { FaCalculator } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";

export default function CurrentStudent () {
    return(
        <div className="w-full lg:px-20 px-5 lg:pt-24 pt-20">
            <div className="text-black font-bold text-5xl">Current Students</div>
            <p className="text-black text-[20px] mt-2">We are here to help you succeed! Here are tools, resources, and information to assist you inside and outside of the classroom.</p>
            <div className="text-black font-bold text-5xl mt-3">Useful Online Tools</div>
            <div className="flex flex-col mt-4">
                <div className="flex flex-row">
                    <FaCalculator className="w-[80px] h-[80px]"/>
                    <div className="flex flex-col ml-4">
                        <div className="text-black font-bold text-3xl">CGPA Calculator</div>
                        <div className="text-black text-[20px]">Log in and use our online CGPA Calculator to compute your CGPA either for the session or per semester</div>
                    </div>
                </div>
                <div className="flex flex-row ml-4 mt-6">
                    <IoLibrary className="w-[80px] h-[80px]"/>
                    <div className="flex flex-col">
                        <div className="text-black font-bold text-3xl">Online Library</div>
                        <div className="text-black text-[20px]">Login and access a vast materials specific to your undegraduate level on our website. Read and download the learning materials provided.</div>
                    </div>

                </div>

            </div>
        </div>
    )
}