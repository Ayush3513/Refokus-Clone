import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

function Product({val,mover,count}) {


    return ( 
        <motion.div whileHover={{backgroundColor: "#2C2C2C",height:"23rem" }} onMouseEnter={()=>{mover(count)}}  className="w-full h-[23rem] pr-[10vw] flex items-center justify-between px-20">
            
                <h1 className='text-[3.5vw] '>{val.title}</h1>
                <div className='w-1/4' >
                    <p className='text-[1.2vw] font-[300] leading-[1.5] mb-5'>{val.des}</p>
                    <div className="flex items-center gap-5">
                        {val.live && <Button title="Live Website" />}
                        {val.case && <Button title="case study"/>}
                    </div>
                </div>
        </motion.div>
     );
}

export default Product;