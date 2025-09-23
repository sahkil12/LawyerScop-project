
const EmptyPage = () => {
    return (
        <div className="min-h-[calc(100vh-413px)] flex flex-col justify-center items-center space-y-8 text-center">
            <h1 className="text-4xl font-bold">You Have Not Booked Any Appointment Yet</h1>
            <button className="px-7 py-3 rounded-lg bg-blue-500 text-lg text-white hover:to-blue-600 font-bold">Book An Appointment</button>
        </div>
    );
};

export default EmptyPage;