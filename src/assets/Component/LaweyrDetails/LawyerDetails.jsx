import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../ErrorPages/Loader";

const LawyerDetails = () => {
    const regNum = useParams()
    const [lawyer, setLawyer] = useState(null);
    useEffect(()=>{
        fetch("/law.json")
        .then(res => res.json())
        .then(data => {
            const singleLawyer = data.filter(d=> d.registrationNumber === regNum.regNum)
           setLawyer(singleLawyer[0])
        })
        .catch(error => console.log(error))
    },[regNum])
    if(lawyer === null){
        return <Loader></Loader>
    }
    console.log(lawyer);
    return (
        <div>
            <h2>Lawyers Details {lawyer.id}</h2>
        </div>
    );
};

export default LawyerDetails;