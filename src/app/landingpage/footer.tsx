import Image from "next/image";

import unilorinlogo from "../images/better by far.png";

export default function Footer() {
    return (
        <>
            <footer className="bg-customBrown py-6 mx-auto w-full mt-6">
                <div className="flex flex-col items-center">
                    <Image className="w-[180px] h-[60px]" src={unilorinlogo} alt="" />
                    <div className="w-[300px] lg:w-[700px] text-4xl mt-6 font-bold text-black text-center">University of Ilorin</div>
                    <div className="text-black">Faculty of Engineering and Technology</div>
                    <div className="text-black">Department of Biomedical Engineering</div>
                    
                </div>
                <div className="md:px-24 lg:px-24 mx-auto mt-6 ml-5 mr-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 md:gap-x-8 lg:gap-x-8 ">
                        <div>
                            <span className="text-black font-bold">Company</span>
                            <div className="mt-4 text-black">About us</div>
                            <div className="mt-4 text-black">Privacy policy</div>
                            <div className="mt-4 text-black">Terms of use</div>
                        </div>
                        <div>
                            <span className="text-black font-bold">Contact</span>
                            <div className="mt-4 text-black">+2348065672944</div>
                            <div className="mt-4 text-black ">bmeunilorin@gmail.com</div>
                        </div>
                        <div className="md:ml-auto lg:ml-auto mt-6 md:mt-0 lg:mt-0">
                            <span className="text-black font-bold">Support</span>
                            <div className="mt-4 text-black ">FAQs</div>
                        </div>
                        <div className="md:ml-auto mt-6 md:mt-0 lg:mt-0 lg:ml-auto">
                            <span className="text-black font-bold">Socials</span>
                            <div className="mt-4 text-black">Facebook</div>
                            <div className="mt-4 text-black">Twitter</div>
                            <div className="mt-4 text-black">Instagram</div>
                            <div className="mt-4 text-black">Whatsapp</div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex justify-center items-center">
                    <span className="text-black text-[12px] font-bold">Copyright ©2024 Unilorin BME. Developed by Santol Technologies </span>
                </div>
            </footer>
        </>
    );
}
