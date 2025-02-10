import img1 from "../assets/bannerImage/pic1.jpg";
import img2 from "../assets/bannerImage/pic2.jpg";
import img3 from "../assets/bannerImage/pic3.jpg";
import img4 from "../assets/bannerImage/pic4.jpg";
import img5 from "../assets/bannerImage/pic5.jpg";
import img6 from "../assets/bannerImage/pic6.jpg";

import img7 from "../assets/bannerImage/pic7.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";



const BannerCarousel = () => {
  return (
    
      <Carousel className="mt-48 ">
      <div>
        <img  src={img4} />
      </div>
      <div>
        <img  src={img2} />
      </div>
      <div>
        <img   src={img3} />
      </div>
      <div>
        <img  src={img1} />
      </div>
      <div>
        <img src={img5} />
      </div>
      <div>
        <img src={img6} />
      </div>
     
      <div>
        <img  src={img7} />
      </div>
    </Carousel>
   
  );
};

export default BannerCarousel;