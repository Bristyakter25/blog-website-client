
import image1 from '../assets/Motion images/image 1.jpg'
import image2 from '../assets/Motion images/image 2.jpg'
import image3 from '../assets/Motion images/image 3.jpg'
import { motion } from "framer-motion";
const BannerMotion = () => {
    return (
        <div className='flex my-10'>
            <div>
            <motion.h1 animate={{ x: [200, 0] }}
      transition={{duration:2, ease:"easeOut",
        repeat: Infinity,
        repeatDelay:1
      }} className="text-5xl font-bold"><img
      src={image1}
      className="max-w-sm rounded-lg shadow-2xl" /></motion.h1>

      
      
        </div>
        <div>
            <motion.h1  animate={{ x: [-200, 0] }}
      transition={{duration:2, ease:"easeIn",
        repeat: Infinity,
        repeatDelay:1
      }} className="text-5xl font-bold"><img
      src={image2}
      className="max-w-sm rounded-lg shadow-2xl h-[380px]" /></motion.h1>

      
      
        </div>
        <div>
            <motion.h1  animate={{ x: [-200, 0] }}
      transition={{duration:2, ease:"easeIn",
        repeat: Infinity,
        repeatDelay:1
      }} className="text-5xl font-bold"><img
      src={image3}
      className="max-w-sm rounded-lg shadow-2xl h-[380px]" /></motion.h1>

      
      
        </div>
        </div>
        
    );
};

export default BannerMotion;
