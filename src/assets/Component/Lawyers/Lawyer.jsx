import { Link } from "react-router-dom";

const Lawyer = ({lawyer}) => {
    const {photo, name, experience, specialty, registrationNumber} = lawyer
    return (
        <div className="border p-6 rounded-xl border-gray-300 flex flex-col md:flex-row gap-7 bg-gray-100">
            <img src={photo} alt={name} className="h-60 w-full md:w-50 object-cover rounded-xl"/>
            {/* text-part */}
            <div className="text-start space-y-2">
                <h2 className="flex flex-wrap gap-3">
                    <span className=" bg-green-100 border border-green-300 text-green-600 rounded-full px-6 py-1 font-medium">Available</span>
                    <span className=" bg-blue-100 border border-blue-300 text-blue-500 rounded-full px-6 py-1 font-medium">{experience} + Experience</span>
                </h2>
                <h2 className="text-2xl font-bold">{name}</h2>
                <h3 className="text-lg text-neutral-500 font-medium">{specialty}</h3>
                <h3 className="text-lg text-neutral-600 font-medium">
                    License No: {registrationNumber}
                </h3>
                <Link to={`/lawyersDetails/${registrationNumber}`}>
                <button className="w-full my-3 border px-7 py-1 rounded-full font-semibold text-lg border-blue-300 hover:bg-blue-600 duration-300 hover:text-white">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Lawyer;