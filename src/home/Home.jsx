
import FAQ from "../pages/faq/Faq";
import TryNewUi from "../pages/TryNewUi";
import AvailableBlogs from "./AvailableBlogs";
import BannerCarousel from "./BannerCarousel";
import BannerMotion from "./BannerMotion";
import RecentBlogs from "./RecentBlogs";



const Home = () => {
    return (
        <div >
             <BannerCarousel></BannerCarousel>
            <div className="lg:max-w-7xl mx-auto" >
            
           
           
         
            <RecentBlogs></RecentBlogs>
            <AvailableBlogs></AvailableBlogs>
            <FAQ></FAQ>
            <BannerMotion></BannerMotion>
           <TryNewUi></TryNewUi>
        </div>
        </div>
    );
};

export default Home;