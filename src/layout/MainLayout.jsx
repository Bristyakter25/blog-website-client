import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Header from "../shared/Header";


const MainLayout = () => {
    return (
        <div >
            <Header></Header>
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto">
            <Outlet></Outlet>
            <Footer></Footer>

            </div>
           
        </div>
    );
};

export default MainLayout;