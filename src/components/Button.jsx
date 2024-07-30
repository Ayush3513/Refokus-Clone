import { motion } from 'framer-motion';
import React from 'react';
import { LuCornerDownRight } from "react-icons/lu";



function Button({title = "Start a Project"}) {
   
    return ( 
        <div className='w-[8.5vw] h-[2.5vw]  flex px-3 items-center justify-between bg-white rounded-full overflow-hidden'>
            <motion.div whileHover={{y: "-40px"}} className="flex flex-col gap-4  mt-[60px] z-10 h-[5vw] ">
            <h4 className='text-black text-[0.9vw] font-[500]'>{title}</h4>
            <h4 className='text-black text-[0.9vw] font-[500]'>{title}</h4>

            </motion.div>
            <motion.div className="flex flex-col gap-5 mt-10 ">
            <LuCornerDownRight color='black' size='.8vw'/>
            <LuCornerDownRight color='black' size='.8vw'/>
            </motion.div>
        </div>
     );
}

export default Button;