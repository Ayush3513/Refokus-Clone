import React, { useState } from 'react';
import Product from './Product';
import { motion } from 'framer-motion';

function Products() {
    const data = [
        {title: "Arqitel" , des: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", live: true , case: false},
        {title: "cula" , des: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", live: true , case: false},
        {title: "Layout Land" , des: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.", live: true , case: false},
        {title: "TTR" , des: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.", live: true , case: true},
        {title: "Manive" , des: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", live: true , case: true},
        {title: "Silvr" , des: "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.", live: true , case: true},
    ]

const [pos, setpos] = useState(0);
const mover = (val) => {
    setpos(val*23)
}


    return (  
        <div className="w-full relative">
            {
                data.map((elem,i) => 
                    <Product key={i} val={elem} mover={mover} count={i} />
                )
            }
            <div className="h-full w-full absolute top-0 pointer-events-none ">
                <motion.div transition={{  duration:.6 }} initial={{y:pos}} animate={{y:pos + `rem`}} className="h-[23rem] w-[32rem] rounded-[20px] absolute left-[30%] overflow-hidden">
                    <motion.div transition={{  duration:.5 }} animate={{y : -pos + `rem`}} className="h-full w-full rounded-[20px] bg-sky-100"><video autoPlay loop muted src="https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm"></video></motion.div>
                    <motion.div transition={{  duration:.5 }} animate={{y : -pos + `rem`}} className="h-full w-full rounded-[20px] bg-sky-300"><video  autoPlay loop muted  src="https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4"></video></motion.div>
                    <motion.div transition={{  duration:.5 }} animate={{y : -pos + `rem`}} className="h-full w-full rounded-[20px] bg-sky-400"><video  autoPlay loop muted  src="https://cdn.refokus.com/website/jungle-4-3-.webm"></video></motion.div>
                    <motion.div transition={{  duration:.5 }} animate={{y : -pos + `rem`}} className="h-full w-full rounded-[20px] bg-sky-500"><video  autoPlay loop muted  src="https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm"></video></motion.div>
                    <motion.div transition={{  duration:.5 }} animate={{y : -pos + `rem`}} className="h-full w-full rounded-[20px] bg-sky-700"><video  autoPlay loop muted  src="https://cdn.refokus.com/website/Maniv-Compressed.mp4"></video></motion.div>
                    <motion.div transition={{  duration:.5 }} animate={{y : -pos + `rem`}} className="h-full w-full rounded-[20px] bg-sky-900"><video  autoPlay loop muted  src="https://cdn.refokus.com/website/2022/videos/Silvr.webm"></video></motion.div>
                </motion.div>
                
            </div>
        </div>
    );
}

export default Products;