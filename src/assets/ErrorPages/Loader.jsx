import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="min-h-[calc(100vh-413px)] flex flex-col justify-center items-center">
      <div>
        <ScaleLoader
        barCount={7}
        color="#3664ec"
        height={55}
        margin={4}
        radius={2}
        speedMultiplier={1}
        width={10}
      />
      </div>
    </div>
  );
};

export default Loader;
