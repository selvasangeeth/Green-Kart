import React from 'react'
import style from './seedBox.module.css'

const SeedVarityBox = ({name,price,image}) => {
  return (
    <>
    <div className={style.Cards}>
    <img src= {image}className={style.image} alt="img" />
    <h2 className={style.heading}>{name}</h2>
    <p className={style.para}>{price}</p>
    </div>
    </>
  )
}

export default SeedVarityBox