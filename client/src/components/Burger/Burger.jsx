import React from 'react';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Burger = () => {
    const [isBurgerClick,setIsBurgerClick]=useState(false);
    console.log(isBurgerClick);
  return (
    isBurgerClick==true?
    <div className='burger__menu'>
        
    </div>:
    <div onClick={()=>{setIsBurgerClick(true)}} className='header__burger'>
        <div>
            <GiHamburgerMenu fontSize={"50px"}/>
        </div>
        
    </div>
  )
}

export default Burger