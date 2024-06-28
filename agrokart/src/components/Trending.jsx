import React from 'react'
import styl from "./Trending.module.css"

const Trending = (props) => {
  return (
    <div>
        <div className={styl.trends}>
        <img height={200} width={200} src={props.img} alt="offer" />

        </div>
      
    </div>
  )
}

export default Trending
