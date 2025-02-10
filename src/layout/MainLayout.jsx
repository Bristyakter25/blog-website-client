import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import NavHead from "../shared/NavHead";


const MainLayout = () => {
    return (
        <div className="overflow-x-hidden" >
            <div className="w-full lg:w-full">
            <NavHead></NavHead>

            </div>
           
            
            <div className=" lg:max-w-7xl  mx-auto">
            <Outlet></Outlet>
            

            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;