import React from 'react';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Stripe from './components/Stripe';
import Products from './components/Products';
import Marquees from './components/Marquees';
import Cards from './components/Cards';
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();



  return ( 
  
    <div className='h-fit  w-full bg-black overflow-hidden'>
      <Navbar />
      <Work />
      <Stripe />
      <Products />
      <Marquees />
      <Cards />
    </div>
    
   );
}

export default App;