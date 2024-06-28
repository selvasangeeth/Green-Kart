import React from 'react'
import style from './Footer.module.css';

const Footer = () => {
  return (
    <div className={style.foo}>
        <h2 className={style.name}>AgroKart</h2>
      <p className={style.copy}>Copyright <span>&copy;</span> 2024 Agrokart</p>
     
      
    </div>
  )
}

export default Footer
