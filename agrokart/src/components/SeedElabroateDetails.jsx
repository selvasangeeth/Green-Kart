// SeedElaborateDetails.js
import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import style from "./SeedElaborate.module.css";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { CartContext } from "../ProviderContext";
import Nav from "./Nav";

const SeedElaborateDetails = () => {
  const navi = useNavigate();
  const { cart, addCart } = useContext(CartContext);

  const location = useLocation();
  const { item } = location.state || {};
  const { name, price, image } = item || {};

  const [size, setSize] = useState("250gms");
  const [pric, setPric] = useState(price);

  const handleADD = (e) => {
    // e.preventDefault();
    item["price"] = pric;
    addCart(item);
   
  };

  const handlesize = () => {
    setSize("250gms");
    setPric(price);
  };
  var p2 = price - 100;
  const handlesizee = () => {
    setSize("200gms");
    setPric(p2);
  };

  return (
    <>
      <Nav/>
  
       
    <div className={style.abs}>
      <div className={style.imagborder}>
        <img className={style.img} src={image} alt={name} />
      </div>
      <div className={style.elabdetails}>
        <h3 className={style.name}>{name}</h3>
        <p className={style.price}>Price: {pric}</p>
        Size: {size}
        <img
          className={style.offerimg}
          src="https://bighaat-prodv2-media-cdn.azureedge.net//wsfbanners/batch_BIGHAAT-coupon-2000rs.webp"
          alt="Offer"
        />
        <div className={style.sizebuton}>
          <button className={style.button} onClick={handlesize}>
            250gms
          </button>
          <button
            className={`${style.button} ${style.buton}`}
            onClick={handlesizee}
          >
            200gms
          </button>
        </div>
        <div className={style.about}>
          <p className={style.origin}>
            <span className={style.icon}>
              <FaLocationCrosshairs />
            </span>{" "}
            Country of Origin India
          </p>
          <p className={style.origin}>
            <span className={style.icon}>
              <RiSecurePaymentLine />
            </span>
            Secure Payments
          </p>
          <p className={style.origin}>
            <span className={style.icon}>
              <TbTruckDelivery />
            </span>
            In stock, Ready to Ship
          </p>
        </div>
        <div className={style.addtocart}>
          <button className={style.addbut} onClick={handleADD}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default SeedElaborateDetails;
