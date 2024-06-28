import React from 'react'
import styl from "./Categories.module.css"
import fungi from"../assests/fungicides.jpeg"
import animal from "../assests/animalhusbandary.jpeg"
import herbi from "../assests/herbicides.jpeg"
import insect from "../assests/insecticide.jpeg"
import seed from "../assests/seeds.jpeg"
import nutri from "../assests/nutrients.jpeg"

const Categories = (props) => {
  return (
    <div>
      
      <div className={styl.cate}>
        <img height={200} width={200} src={props.img} alt="seed" />
        <p>{props.name}</p>

      </div>

    </div>
  )
}

export default Categories
