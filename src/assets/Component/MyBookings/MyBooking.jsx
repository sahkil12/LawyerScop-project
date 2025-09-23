
const MyBooking = ({lawyer , handleRemoveLawyer}) => {
    const { id, name, fee, specialty} = lawyer
    
    return (
        <div className="border space-y-4 my-5 px-6 rounded-lg border-gray-300 bg-gray-100 py-5 ">
               <h2 className="font-bold text-xl text-start">{name}</h2> 
               <h2 className="flex justify-between font-medium text-neutral-600 text-lg">
                <span>{specialty}</span>
                <span>Appointment Fee : {fee} Taka</span>
               </h2>
               <div className="border border-dashed border-gray-300"> </div>
               <button
            onClick={()=>handleRemoveLawyer(id)}
            className="w-full py-3 my-4 rounded-full text-xl font-bold border border-red-500 hover:bg-red-400 text-red-500 hover:text-white duration-500">Book Appointment Now</button>
        </div>
    );
};

export default MyBooking;