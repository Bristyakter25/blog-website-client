import img1 from "../assets/bannerImage/pic1.jpg";
import img2 from "../assets/bannerImage/pic2.jpg";
import img3 from "../assets/bannerImage/pic 3.jpg";
import img4 from "../assets/bannerImage/pic4.jpg";
import img5 from "../assets/bannerImage/pic5.jpg";
import img6 from "../assets/bannerImage/pic6.jpg";
import img7 from "../assets/bannerImage/pic7.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const BannerCarousel = () => {
  return (
    <Carousel
      className="mt-48 w-full"
      autoPlay={true}
      interval={2000}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
    >
      <div>
        <img
          src={img4}
          alt="Banner 4"
          className="w-full lg:lg:h-[650px] h-[400px]  rounded-lg" // Example Tailwind classes
        />
      </div>
      <div>
        <img
          src={img2}
          alt="Banner 2"
          className="w-full lg:h-[650px] h-[400px] rounded-lg"
        />
      </div>
      <div>
        <img
          src={img3}
          alt="Banner 3"
          className="w-full lg:h-[650px] h-[400px] rounded-lg"
        />
      </div>
      <div>
        <img
          src={img1}
          alt="Banner 1"
          className="w-full lg:h-[650px] h-[400px] rounded-lg"
        />
      </div>
      <div>
        <img
          src={img5}
          alt="Banner 5"
          className="w-full lg:h-[650px] h-[400px] rounded-lg"
        />
      </div>
      <div>
        <img
          src={img6}
          alt="Banner 6"
          className="w-full lg:h-[650px] h-[400px] rounded-lg"
        />
      </div>
      <div>
        <img
          src={img7}
          alt="Banner 7"
          className="w-full lg:h-[650px] h-[400px] rounded-lg"
        />
      </div>
    </Carousel>
  );
};

export default BannerCarousel;