import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { getLawyers, removeLawyer } from "../../database/LawyerDB";
import MyBooking from "./MyBooking";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import EmptyPage from "../../ErrorPages/EmptyPage";

const MyBookings = () => {
    // chart data ---
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'gray', 
    'tomato','#006A67', 'blueviolet', 'cadetblue','#59AC77', '#5D2F77', '#4FB7B3'
];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
    // chart data end
    const [bookedLawyers, setBookedLawyers] = useState([])
    useEffect(()=>{
        setBookedLawyers(getLawyers())
    },[])
    const chartData = bookedLawyers.map(law=>({
        name:law.name,
        fee:law.fee,
    }))
    const handleRemoveLawyer = id =>{
        removeLawyer(id)
        const storedRemainingLawyer = getLawyers()
        setBookedLawyers(storedRemainingLawyer)
    }
    if(bookedLawyers.length === 0){
        return <EmptyPage></EmptyPage>
    }
    return (
        <div className="my-10 space-y-8 ">
            <Helmet>
                <title>My Bookings | LawyerSpot</title>
            </Helmet>
            {/* data chart */}
            <div className="my-3 md:my-8 py-5 flex justify-center">

                <BarChart
      width={1500}
      height={700}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="fee" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {bookedLawyers.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
            </div>
            {/* appointment list*/}
            <div className="my-12 md:w-[75%] mx-auto space-y-6">
                <section className="text-center space-y-6">
                    <h2 className="text-[40px] font-bold ">My Today Appointments </h2>
                    <p className="opacity-85 font-normal text-lg/relaxed">A clear overview of your upcoming appointments, times, and details for the day</p>
                </section>
                <section className="space-y-8 ">
                    {
                        bookedLawyers.map(lawyer=> <MyBooking 
                            key={lawyer.id}
                            lawyer={lawyer}
                            handleRemoveLawyer={handleRemoveLawyer}
                        ></MyBooking>)
                    }
                </section>
            </div>
        </div>
    );
};

export default MyBookings;