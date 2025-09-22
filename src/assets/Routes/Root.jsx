import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="sticky z-50 top-0 ">
                <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-413px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;