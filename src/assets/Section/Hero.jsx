
const Hero = () => {
    return (
            <div className={`my-7 md:w-[75%] mx-auto rounded-xl py-5 h-140 bg-center bg-no-repeat bg-cover`} 
        style={{backgroundImage:`linear-gradient(65deg, #000000b1, #000000b1),url(/lawbanner.jpg)`}}>
            <div className="text-center text-white space-y-7 flex flex-col justify-center h-full">
                <h2 className="text-center md:w-[60%] mx-auto text-3xl/normal md:text-4xl/normal font-bold text-white">It avoids subjective claims or exaggeration that might raise red flags legally</h2>
                <p className="w-2/3 mx-auto">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
        </div>
    );
};

export default Hero;