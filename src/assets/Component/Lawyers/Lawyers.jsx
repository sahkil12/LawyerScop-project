import { useEffect, useState } from "react";
import Lawyer from "./Lawyer";

const Lawyers = () => {
const [lawyers, setLawyers] = useState([]);

useEffect(() => {
    fetch('/law.json')
        .then(res => res.json())
        .then(data => setLawyers(data))
}, [])  
    return (
        <div className="my-6 py-8  md:w-[75%] mx-auto">

            <div className="text-center space-y-5">
                {/* heading text */}
                <h2 className="text-[40px] font-bold ">Our Best Lawyers</h2>
                <p className="opacity-85 md:w-3/4 mx-auto">Our team of highly skilled and experienced lawyers is dedicated to providing clear, honest, and effective legal solutions, guiding you through every step with professionalism and care.</p>
            </div>
                {/* dynamic lawyers card data */}
               <div className="grid my-7 py-6 mx-3 grid-cols-1 lg:grid-cols-2 gap-8">
                {
                    lawyers.map((lawyer, idx) => <Lawyer key={idx} lawyer={lawyer}></Lawyer>)
                }
               </div>
        </div>
    );
};

export default Lawyers;