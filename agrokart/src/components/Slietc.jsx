import React from 'react'
import growp from "../assests/plantgrowthpromo.jpg"
import growbags from "../assests/growbags.webp"
import azzola from "../assests/azzzola.jpg"
import excl from "../assests/excluimg3.jpeg"
import sty from "../components/Slietc.module.css"
const Slietc = () => {
  return (
    <div className={sty.cards}>
      <h2 className={sty.head}>EXCLUSIVE DEALS</h2>
      <div className={sty.car}>
      <img src={azzola} alt="az" />
      <img src={growbags}alt="gb" />
      <img src={excl} alt="ex" />
      </div>
      
      


    </div>
  );
}

export default Slietc