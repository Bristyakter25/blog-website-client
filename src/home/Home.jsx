
import FAQ from "../pages/faq/Faq";
import TryNewUi from "../pages/TryNewUi";
import AvailableBlogs from "./AvailableBlogs";
import BannerCarousel from "./BannerCarousel";
import BannerMotion from "./BannerMotion";
import RecentBlogs from "./RecentBlogs";



const Home = () => {
    return (
        <div className="w-full" >
            
            <BannerCarousel></BannerCarousel>
           
         
            <RecentBlogs></RecentBlogs>
            <AvailableBlogs></AvailableBlogs>
            <FAQ></FAQ>
            <BannerMotion></BannerMotion>
           <TryNewUi></TryNewUi>
        </div>
    );
};

export default Home;