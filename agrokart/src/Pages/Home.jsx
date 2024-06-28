import React from 'react'
import style from "./Homecss.module.css"
import { VscAccount } from "react-icons/vsc";
import { IoCart } from "react-icons/io5";
import { MdSell } from "react-icons/md";
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import tool from "../assests/tools.jpeg";
import otherP from "../assests/otherProdct.jpg"
import seed from "../assests/seeds.jpeg"
import fertilizers from "../assests/fertilizers.jpg"
import nutri from "../assests/nutrients.jpeg"
import fungi from"../assests/fungicides.jpeg"
import animal from "../assests/animalhusbandary.jpeg"
import herbi from "../assests/herbicides.jpeg"
import Trending from '../components/Trending';
import Slietc from '../components/Slietc'
import Best from "../components/Best.jsx";
import Footer from "../components/Footer.jsx";
import SeedClick from "../components/Seedclick.jsx"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{"backgroundColor":"antiquewhite"}}>
      <div>
        <header className={style.hd}>
            <h2 className={style.anme}>AgroKart</h2>  
            
            <nav>
            <ul>
              <li >
              <input type='text' style={{'borderRadius':'20px'}} placeholder='   Search...'></input>
              </li>
              
            <li>
                <span ><a href='/login'><VscAccount className={style.icon}/>LOGIN</a></span>
            </li>
            <li>
                <span><a href='/Cart'><IoCart className={style.icon}/>CART</a></span>
            </li>
            <li>
              <span><a href= "./Seller"><MdSell className={style.icon}/>SELL</a></span>
            </li>
            </ul>

        </nav>
        </header>
      </div>

      {/* content */}
      <Slider/>
      <div className={style.cardsContainer}>
      <h1 className={style.heading}>OUR PRODUCTS</h1>
      <div className={style.cards}>
      <Link to="/SeedClick"><Categories img={seed} name={"Seeds"}/></Link>
      <Categories img={nutri} name={"Nutrients"} />
      <Categories img={fungi} name={"Fungicides"} />
      <Categories img={animal} name={"Animal Husbandary"} />
      <Categories img={herbi} name={"Herbicides"} />
      <Categories img={fertilizers} name={"Fertilizer"} />
      <Categories img={tool} name={"Tools"} />
      <Categories img={otherP} name={"Other Products"} />

      </div>
      </div>
       <div className={style.trend}>
        <h1 className={style.headingt}>OUR TRENDING OFFERS  </h1>
        <div className={style.align}>
        <Trending img={seed} />
        <Trending img={seed} />
        <Trending img={seed} />
        <Trending img={seed} />
        <Trending img={seed} />
        </div>
       </div>

       <Slietc/>
       <Best/>
       <Footer/>
       
    </div>
  )
}

export default Home
