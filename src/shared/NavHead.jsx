import Header from "./Header";
import Navbar from "./Navbar";

const NavHead = ({ toggleTheme, isDarkMode }) => {
    return (
        <div className="w-full lg:w-full fixed top-0 z-10">
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <Navbar />
        </div>
    );
};

export default NavHead;
