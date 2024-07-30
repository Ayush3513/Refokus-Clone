import { useScroll } from 'framer-motion';
import React, { useState } from 'react';
import { CiPause1 } from 'react-icons/ci';
function Work() {

   
    
    var [imgs, setImgs] = useState(
        [
            { url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",left:"50%",top:"50%",isActive:false},
            { url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",left:"40%",top:"60%",isActive:false},
            { url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",left:"60%",top:"40%",isActive:false},
            { url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",left:"50%",top:"65%",isActive:false},
            { url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",left:"65%",top:"45%",isActive:false},
            { url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",left:"50%",top:"60%",isActive:false},
         ]
    );

   

    const {scrollYProgress} = useScroll();
    
    scrollYProgress.on("change", (data) => {
        function showimg(arr) {
            setImgs(prevImgs =>
                prevImgs.map((item, i) => (
                    arr.indexOf(i) === -1 ? {...item, isActive: false} : {...item, isActive: true}
                ))
            );
        }


    switch(Math.floor(data*100)){
        case 0:
            showimg([])
            break
        case 2:
            showimg([0])
            break  
        case 3:
            showimg([0,1])
            break      
        case 5:
            showimg([0,1,2])
            break  
        case 6:
            showimg([0,1,2,3])
            break   
        case 8:
            showimg([0,1,2,3,4])
            break  
        case 10:
            showimg([0,1,2,3,4,5])
            break         
    }
    
})
    return (
        <div className='w-full selection-none'>
            <div className="max-w-screen-xl relative mx-auto text-center flex justify-center py-3"  >
                <h1 className=' text-[35vw] font-[satoshi_variable] font-[500] selection-none  leading-none'>work</h1>
                <div className="absolute h-full w-full ">
                    {imgs.map(elem => elem.isActive && (<img style={{top:elem.top , left:elem.left  }} className='absolute rounded-lg -translate-x-1/2 -translate-y-1/2 h-[20vw] w-[20vw]' src={elem.url} alt="" />) )}
                </div>
            </div>
            
        </div>
      );
}

export default Work;