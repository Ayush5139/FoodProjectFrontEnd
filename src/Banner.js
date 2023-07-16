import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BAAraa from './BAAraa'
import './banner.css'

function Banner() {
  useEffect(()=>{
    axios.get("https://food-backend-gub7.onrender.com/home")
    .then((res)=>console.log(res.data))
  },[])
  return (
    <div className='bannermaindiv'>
        <div> 
            <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/24/25/3/l3Fx6AnTcGOjhwYNhggo_0S9A9332.jpg' className='bannerimg'/>
        </div>
        <div className='bannerminiidiv'>
          <h1 class="bannerdivh">56 Grilled Chicken Recipes</h1>
          <button className='bannerbtn'><Link to={"/recipe/Grilled Chicken"} className = 'bannerlink'>See Them All</Link></button>
        </div>
    </div>
  )
}

export default Banner