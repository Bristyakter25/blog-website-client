
import TryNewUi from "../pages/TryNewUi";
import BannerCarousel from "./BannerCarousel";
import BannerMotion from "./BannerMotion";
import RecentBlogs from "./RecentBlogs";



const Home = () => {
    return (
        <div>
            
            <BannerCarousel></BannerCarousel>
            <BannerMotion></BannerMotion>
         
            <RecentBlogs></RecentBlogs>
           <TryNewUi></TryNewUi>
        </div>
    );
};

export default Home;