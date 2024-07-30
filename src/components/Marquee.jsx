import { motion } from 'framer-motion';
import React from 'react';
import { ImGift } from 'react-icons/im';

function Marquee({links,direction}) {

    
    return ( 
        <div className="w-[200vw] flex justify-around ">
            <motion.div initial={{x: direction == "left" ? "0" : "-100%"}} animate={{x: direction === "left" ? "-100%" : "0"}} transition={{ease: "linear",repeat:Infinity,duration:15}} className="flex flex-shrink-0 gap-20 ">
            {links.map((item,i) => <img key={i} src={item} alt="" />)}
            </motion.div>
            <motion.div initial={{x: direction == "left" ? "0" : "-100%"}} animate={{x: direction === "left" ? "-100%" : "0"}} transition={{ease: "linear",repeat:Infinity,duration:15}} className="flex flex-shrink-0 gap-20 ">
            {links.map((item,i) => <img key={i} src={item} alt="" />)}
            </motion.div>
        </div>
     );
}

export default Marquee;