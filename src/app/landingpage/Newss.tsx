import Newspost from "./news";

export default function Newssection () {

    return (

        <>
            <div className="mt-5 px-5 lg:px-20">
                <div>
                    <div className="text-2xl text-black font-bold mb-4 ml-4">NEWS</div>
                    <Newspost/>
                </div>
            </div>
        </>
        
    )
} 