import Header from "./Header";
import Navbar from "./Navbar";

const NavHead = ({ toggleTheme, isDarkMode }) => {
    return (
        <div className="w-full lg:w-full fixed top-0 z-10">
            <Header />
            <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        </div>
    );
};

export default NavHead;
