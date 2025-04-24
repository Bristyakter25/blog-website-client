import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import NavHead from "../shared/NavHead";

const MainLayout = () => {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    // Toggle theme
    const toggleTheme = () => {
        const newTheme = isDarkMode ? "light" : "dark";
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark", !isDarkMode);
        localStorage.setItem("theme", newTheme);
    };

    
    useEffect(() => {
        if (
            localStorage.getItem("theme") === "dark" ||
            (!localStorage.getItem("theme") &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    return (
        <div className="overflow-x-hidden bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
            <NavHead toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            
            <div className=" mt-16">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default MainLayout;
