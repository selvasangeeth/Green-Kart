import React from 'react'
import style from './seedBox.module.css'
import { useNavigate } from 'react-router-dom'

const SeedBox = ({name,price,image}) => {
  const navi = useNavigate();
  

  const handle = ()=>{
    navi("/SeedDetails", { state: { name } });

  }
  return (
    <>
    <div className={style.Cards}>
    <div onClick={handle}>
    <img src= {image}className={style.image} alt="img" />
    <h2 className={style.heading}>{name}</h2>
    <p className={style.para}>{price}</p>
    </div>
    </div>
    </>
 )
}
export default SeedBox;