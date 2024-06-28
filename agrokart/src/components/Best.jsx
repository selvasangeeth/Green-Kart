import React from 'react'
import style from './Best.module.css'
import like from "../assests/like.png";
import cash from "../assests/cassh.png";
import delivery from "../assests/delivery.png"

const Best = () => {
  return (
    <div className={style.best}>
        <div className={style.extra}>
          <img src={like} alt="like" />
          <h3>BEST QUALITY</h3>
          <p>Assured Genuine Products from Trusted well-known Brands of India</p>
        </div>
        <div className={style.extra}>
          <img src={cash} alt="cash" />
          <h3>CASH ON DELIVERY</h3>
          <p>Ease to Pay Cash Payment for your parcel When you received</p>
        </div>
        <div className={style.extra}>
          <img src={delivery} alt="delivery" />
          <h3>FAST DELIVERY</h3>
          <p>Your Order is very prior to us, we deliver it faster as much we can.</p>
        </div>

       </div>
  )
}

export default Best
