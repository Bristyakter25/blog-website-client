import Header from "./Header";
import Navbar from "./Navbar";


const NavHead = () => {
    return (
        <div className="w-full lg:w-full fixed top-0 z-10">
            <Header></Header>
            <Navbar></Navbar>

        </div>
    );
};

export default NavHead;