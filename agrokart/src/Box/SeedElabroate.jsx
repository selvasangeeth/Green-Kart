import React from 'react'
import style from './SeedElabroate.module.css';
import { useNavigate } from 'react-router-dom'; 


const SeedElabroate = ({name,price,size,image}) => {
    const navi = useNavigate();
    const handle = ()=>{
        navi("/SeedElaborate", { state: { name } });
    
      }

  return (
    <>
    <div className={style.Elabro}>
        <div onClick={handle}>
        <div>Name:{name}</div>
        <div>Price:{price}</div>
        <div>size:{size}</div>
        <img src={image} alt="img" />
        </div>

    </div>
    </>
  )
}

export default SeedElabroate
