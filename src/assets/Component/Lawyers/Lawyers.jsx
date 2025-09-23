import { useEffect, useState } from "react";
import Lawyer from "./Lawyer";

const Lawyers = () => {
const [lawyers, setLawyers] = useState([]);
const [initialLawyers, setInitialLawyers] =useState(8)

useEffect(() => {
    fetch('/law.json')
        .then(res => res.json())
        .then(data => setLawyers(data))
}, [])  
const visibleLawyers = lawyers.slice(0, initialLawyers);
    return (
        <div className="my-6 flex flex-col  py-8 md:w-[75%] mx-auto">

            <div className="text-center space-y-5">
                {/* heading text */}
                <h2 className="text-[40px] font-bold ">Our Best Lawyers</h2>
                <p className="opacity-85 md:w-3/4 mx-auto">Our team of highly skilled and experienced lawyers is dedicated to providing clear, honest, and effective legal solutions, guiding you through every step with professionalism and care.</p>
            </div>
                {/* dynamic lawyers card data */}
               <div className="grid my-7 py-6 mx-3 grid-cols-1 2xl:grid-cols-2 gap-8">
                {
                    visibleLawyers.map((lawyer, idx) => <Lawyer key={idx} lawyer={lawyer}></Lawyer>)
                }
               </div>
               {
                initialLawyers < lawyers.length && <button
               onClick={()=>setInitialLawyers(lawyers.length)}
               className="mx-auto my-3 px-12 py-3 rounded-full font-bold text-xl bg-blue-600 hover:bg-blue-700 duration-300 text-white">View All Lawyers</button>
               }
        </div>
    );
};

export default Lawyers;