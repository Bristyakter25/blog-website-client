import { motion } from "framer-motion";
import image2 from '../assets/Motion images/image 2.jpg';


const BannerMotion = () => {
    return (
        <div className="my-10">
           <h2 className="text-3xl text-[#A294F9] mb-5  font-bold text-center ">Features</h2>
          <div className="flex flex-col md:flex-row items-center   space-y-6 md:space-y-0">
         <div className="lg:w-[620px] w-full md:w-1/2 px-4">
             <h2 className="text-3xl  text-center lg:text-start font-bold mb-10">
                 Simple and Efficient Blog Organization
             </h2>
             <p className="text-xl font-medium leading-relaxed">
                 The Web Development Blog Website is an interactive platform designed to share and explore insightful blogs related to web development. The website is developed with modern tools and technologies to ensure a seamless user experience, dynamic content, and robust features.
             </p>
         </div>

         {/* Motion Image Section */}
         <motion.div
             className="lg:w-[600px] w-[330px]  md:w-1/2 px-4"
             animate={{ x: 50 }}
             transition={{
                 duration: 2,
                 ease: "easeOut",
                 repeat: Infinity,
                 repeatDelay: 1,
             }}
         >
             <img src={image2} alt="Motion Banner" className="rounded-lg shadow-lg " />
         </motion.div>
     </div>
        </div>
    );
};

export default BannerMotion;