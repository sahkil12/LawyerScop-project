export const getLawyers = ()=>{
    let lawyers = []
    const storedLawyerStr = localStorage.getItem("lawyer")
    if(storedLawyerStr){
        lawyers = JSON.parse(storedLawyerStr)
    } 
    return lawyers
}