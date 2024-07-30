import React from 'react';
function Stripe() {
    const data = [
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg", num:52},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", num:2},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", num:15},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg", num:52},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", num:2},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", num:15},
    ]
    
    return (  
        <div className='h-[5vw] mb-20 w-fit mt-10 justify-center items-center  flex'>
           {
            data.map((elem,i) => i === 0 ? (
                <div key={i} className="w-[16.66vw] h-full border-l-none border-[.5px] border-zinc-600 flex items-center justify-between px-10">
                <img className='h-[6vw] w-[6vw]' src={elem.url} alt="" />
                <h4 className='text-[1.1vw]'>{elem.num}</h4>
            </div>
            ) : (
                <div key={i} className="w-[16.66vw] h-full border-[.5px] border-zinc-600 flex items-center justify-between px-10">
                <img className='h-[6vw] w-[6vw]' src={elem.url} alt="" />
                <h4 className='text-[1.1vw]'>{elem.num}</h4>
            </div>
            )
        )
           }
        </div>
    );
}

export default Stripe;