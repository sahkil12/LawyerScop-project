import toast from "react-hot-toast"

export const getLawyers = ()=>{
    let lawyers = []
    const storedLawyerStr = localStorage.getItem("lawyers")
    if(storedLawyerStr){
        lawyers = JSON.parse(storedLawyerStr)
    } 
    return lawyers
}
// save lawyers--

export const saveLawyer = (lawyer) =>{
    let lawyers = getLawyers()
    const exist = lawyers.find(law => law.id === lawyer.id)
    if(exist){
        toast.error('Appointment Already Schedule For Today', {duration: 1500,})
        return false;
    }
    else{
        lawyers.push(lawyer)
        localStorage.setItem("lawyers", JSON.stringify(lawyers))
        toast.success(`Appointment Scheduled for ${lawyer.name} successfully `
            , {duration: 1500}
        )
        return true
    }
}
// remove lawyer--
export const removeLawyer = (id)=>{
    let lawyers = getLawyers()
    const remainingLawyers = lawyers.filter(law => law.id !== id)
    localStorage.setItem("lawyers", JSON.stringify(remainingLawyers))
    toast.success("Remove Lawyer from list" , {duration: 1500,})
}