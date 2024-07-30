import React from 'react';
import Button from './Button';
 function Navbar() {
    return ( 
        <>
        <div className=' w-full py-5 border-b-[.5px] border-zinc-700  flex items-center justify-between px-[5vw]'>
            <div className="nleft flex items-center">
            <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
            <div className="links flex items-center gap-16 ml-[6vw]">
                {["Home","Work","About","","News"].map((elem,i) => elem.length === 0 ? <span key={i} className='h-7 w-[1px] bg-zinc-400 '></span> : <a key={i} className='flex text-sm items-center font-[satoshi_variable] font-[500] font-normal gap-1' href="">{ i === 1 && (<span style={{boxShadow: "0 0 0.25em #00FF19"}} className='inline-block h-[.8vh] w-[.8vh] bg-[#00FF19] rounded-full'></span>) }{elem}</a> )}
            </div>
            </div>
            <Button />
        </div>
        </>
     );
 }                                                      
 
 export default Navbar;