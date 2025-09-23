import { useEffect, useState } from "react";
import { Link, useNavigate, useNavigation, useParams } from "react-router-dom";
import Loader from "../../ErrorPages/Loader";
import { CiSquareInfo } from "react-icons/ci";
import { saveLawyer } from "../../database/LawyerDB";
import { Helmet } from "react-helmet";

const LawyerDetails = () => {
    const regNum = useParams()
    const [lawyer, setLawyer] = useState(null);
    const navigation = useNavigation()
    const navigate = useNavigate()
    useEffect(()=>{
        fetch("/law.json")
        .then(res => res.json())
        .then(data => {
            const singleLawyer = data.filter(d=> d.registrationNumber === regNum.regNum)
           setLawyer(singleLawyer[0])
        })
        .catch(error => console.log(error))
    },[regNum])
    if( navigation.state === 'loading' || lawyer === null){
        return <Loader></Loader>
    }
    const {photo, name, experience, specialty, registrationNumber, availableDays, fee} = lawyer;
    const handleBooking = () =>{
        const added = saveLawyer(lawyer)
        if(added){
            navigate('/mybookings')
        }
    }

    return (
        <div className="my-10 space-y-7 md:w-[75%] mx-auto py-3">
            <Helmet>
                <title>Details Of - {name}</title>
            </Helmet>
{/* details header */}
            <div className="bg-gray-200 text-center rounded-xl py-8 space-y-6">
                <h2 className="text-[40px] font-bold">Lawyer’s Profile Details</h2>
                <p className="opacity-85 text-base/relaxed font-medium md:w-3/4 mx-auto">Explore complete profiles of our legal professionals, including their qualifications, specialties, years of experience, and notable achievements to help you choose the right representation.</p>
            </div>
            {/* details part */}
                <div className="border bg-gray-100 border-gray-200 rounded-xl flex flex-col md:flex-row gap-8 md:items-center p-7">
                   <div className="flex-1">
                     <img src={photo} className="rounded-xl w-full object-cover h-70" alt="" />
                   </div>
                    <div className="text-start flex-3 space-y-5 py-6">
                         <h4 className=" bg-blue-100 border border-blue-300 text-blue-500 rounded-full w-fit px-6 py-1 font-medium">{experience} + Experience</h4>
                         <h2 className="text-2xl font-bold">{name}</h2>
                         <h3 className="flex flex-col md:flex-row gap-4 md:gap-8">
                            <span className="text-neutral-500 font-medium text-lg">{specialty}</span>
                            <span className="text-neutral-500 font-medium text-lg"> ® License No: {registrationNumber}</span>
                         </h3>
                         <h2 className="text-neutral-600 font-bold text-xl flex flex-wrap gap-6 items-center">Availability
                            {
                            availableDays.map((day, idx)=> <span className="rounded-full border border-orange-400 bg-orange-50 text-orange-500 text-sm px-5 py-1 font-medium" key={idx}>{day}</span>)
                            }
                         </h2>
                         <h2 className="text-lg text-neutral-600 font-bold ">Consultation Fee : <span className="text-green-500">{fee}   Taka </span></h2>
                    </div>
                </div>
                {/* booking section part */}
                <div className="border py-6 border-gray-300 rounded-xl px-4 space-y-4">
        <h2 className="text-2xl font-bold text-center">Book an Appointment</h2>
        <div className="border border-neutral-300 border-dashed"> </div>
        <h2 className="flex items-center justify-between text-lg font-bold">
          Availability{" "}
          <span className="border px-4 py-2 rounded-full border-green-300 bg-green-100 font-medium text-green-600 text-base">
           Lawyer Available Today
          </span>
        </h2>
        <div className="border-b border-gray-300"></div>

          <h2 className="px-4 w-fit flex gap-2 my-5 items-center py-2 border border-orange-100 rounded-full bg-orange-100 font-medium text-orange-400">
            {" "}
            <span>
              <CiSquareInfo size={25} />
            </span>{" "}
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </h2>    
            <button
            onClick={handleBooking}
            className="w-full py-3 my-4 rounded-full text-xl font-bold bg-blue-500 hover:bg-blue-600 text-white duration-500">Book Appointment Now</button>
      </div>
        </div>
    );
};

export default LawyerDetails;