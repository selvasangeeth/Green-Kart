import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import style from './SeedElaborate.module.css';
import { FaLocationCrosshairs } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

const SeedElabroateDetails = () => {
  const location = useLocation();
  const { item } = location.state || {};
  const { name, price, image } = item || {};

  const [size, setSize] = useState('250gms');
  const[pric,setPric]=useState(price);

  const handlesize = () => {
    setSize('250gms');
    setPric(price)
  };

  const handlesizee = () => {
    setSize('200gms');
    setPric(price-100)
  };


  return (
    <div className={style.abs}>
      <div className={style.imagborder}>
        <img className={style.img} src={image} alt={name} />
      </div>
      <div className={style.elabdetails}>
        <h3 className={style.name}>{name}</h3>
        <p className={style.price}>Price: {pric}</p>
        Size: {size}
        <img className={style.offerimg} src="https://bighaat-prodv2-media-cdn.azureedge.net//wsfbanners/batch_BIGHAAT-coupon-2000rs.webp" alt="Offer" />
        <div className={style.sizebuton}>
          <button className={style.button} onClick={handlesize}>250gms</button>
          <button className={`${style.button} ${style.buton}`} onClick={handlesizee}>20gms</button>
        </div>
        <div className={style.about}>
            <p className={style.origin}><span className={style.icon}><FaLocationCrosshairs /></span> Country of Origin India</p>
            <p className={style.origin}><span className={style.icon}><RiSecurePaymentLine /></span>Secure Payments</p>
            <p className={style.origin}><span className={style.icon}><TbTruckDelivery /></span>In stock, Ready to Ship</p>
            
        </div>
        <div className={style.addtocart}>
            <button className={style.addbut}>Add to Cart</button>

        </div>
      </div>
    </div>
  );
};

export default SeedElabroateDetails;
