import React from 'react'
import Products from '../SeedVarity';
import style from '../Box/seedBox.module.css'


const TomatoDetails = () => {
  return (
    <div className={style.CradsCont}>
        {Products.map((item, index) => (
          <div key={index} className={style.Cards}>
            <img src={item.details.image} className={style.image} alt="img" />
            <h2 className={style.heading}>{item.name}</h2>
            <p className={style.para}>{item.price}</p>
          </div>  
        ))}
      </div>
    );
  };
export default TomatoDetails