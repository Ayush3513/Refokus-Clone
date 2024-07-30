import React from 'react';
import Card from './Card';

function Cards() {
    return ( 
        <div className="w-full">
            <div className="w-[90vw] mx-auto my-20 flex gap-[3px]">
               <Card width={"w-1/3"} start={false} para={true}/>
               <Card width={"w-2/3"}  start={true} para={false} title={"Let's get to it,together"} hover={true}/>
            </div>
        </div>
     );
}

export default Cards;