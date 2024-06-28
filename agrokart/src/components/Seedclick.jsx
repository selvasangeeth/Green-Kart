import React from 'react'
import Product from "../Productseed"
import SeedBox from "../Box/SeedBox";
import style from "../Box/seedBox.module.css"


const Seedclick = () => {
  return (
    <>
    <div className={style.CradsCont}>
      {Product && Product.map((f,i)=><SeedBox key={i} name={f.name} price={f.price} image={f.image}/>)}
    </div>
    </>
  )
}

export default Seedclick
