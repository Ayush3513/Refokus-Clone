import { motion } from 'framer-motion';
import React from 'react';
import { MdOutlineArrowRightAlt } from "react-icons/md";


function Card({width,start,para,hover="false",title="insight and behind the scenes"}) {
    
    return ( 
        <motion.div whileHover={{backgroundColor : hover == true && "#7443FF", padding: "40px"  }} className={` ${width} h-[29vw] bg-[#29292e] rounded-[20px] p-8 flex flex-col justify-between`}>
            <div className="">
            <div className="flex items-center justify-between ">
                <h4>Up Next:News</h4>
                    <MdOutlineArrowRightAlt />
            </div>
            <h1 className='text-[2vw] w-[18vw] mt-5 leading-none font-semibold'>{title}</h1>
            </div>
            
            <div className="">
                {
                    start && (
                        <>
                        <h1 className='text-[7vw] font-semibold'>Start a Project</h1>
                        <button className='py-3 px-8 border-[1.1px] rounded-full'>Contact Us</button>
                        </>
                    )
                }
                {
                para && (
                    <p className='text-sm opacity-[.6]'>Explore what drives our dream</p>
                    )
                }

            </div>
        </motion.div>
     );
}

export default Card;