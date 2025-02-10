
import FAQ from "../pages/faq/Faq";
import TryNewUi from "../pages/TryNewUi";
import BannerCarousel from "./BannerCarousel";
import BannerMotion from "./BannerMotion";
import RecentBlogs from "./RecentBlogs";



const Home = () => {
    return (
        <div>
            
            <BannerCarousel></BannerCarousel>
           
         
            <RecentBlogs></RecentBlogs>
            <FAQ></FAQ>
            <BannerMotion></BannerMotion>
           <TryNewUi></TryNewUi>
        </div>
    );
};

export default Home;