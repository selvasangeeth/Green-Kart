import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import style from '../Box/seedBox.module.css';

const SeedDetails = () => {
  const { state } = useLocation();
  const { name } = state || {};
  const [details, setDetails] = useState([]);

  const seedVarieties = {
    "Tomato Seeds": [
      { image: "https://images.meesho.com/images/products/361048029/gsk8n_512.webp", name: "A Tomato", price: "716",size:"123 gms" },
      { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5blVOkTrfDtF24IJG1yM734CZpm2FByvovw&s", name: "B Tomato", price: "616",size:"13 gms" }
    ],
    "Coriander": [
      { image: "", name: "A Coriander", price: "716" },
      { image: "", name: "B Coriander", price: "616" }
    ],
  };

  useEffect(() => {
    if (name) {
      setDetails(seedVarieties[name] || []);
    }
  }, [name]);

  const navigate = useNavigate();

  const handle = (item) => {
    navigate("/SeedElaborateDetails", { state: { item } });
  };

  return (
    <div className={style.CradsCont}>
      {details.map((item, index) => (
        <div key={index} className={style.Cards}>
          <div onClick={() => handle(item)}>
            <img src={item.image} className={style.image} alt="img" />
            <h2 className={style.heading}>{item.name}</h2>
            <p className={style.para}>{item.price}</p>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeedDetails;
