
import TryNewUi from "../pages/TryNewUi";
import BannerCarousel from "./BannerCarousel";
import RecentBlogs from "./RecentBlogs";



const Home = () => {
    return (
        <div>
            <h2>this is home</h2>
            <BannerCarousel></BannerCarousel>
         
            <RecentBlogs></RecentBlogs>
           <TryNewUi></TryNewUi>
        </div>
    );
};

export default Home;