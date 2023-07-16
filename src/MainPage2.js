import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Nav from './Nav'
import "./mainpage2.css"
import BAAraa from './BAAraa'
import Banner from './Banner'
import Craving from './Craving'
import Trending from './Trending'
import Special from './Special'
import Search from './Search'
import FooterText from './FooterText'

function MainPage2() {
  const data = useParams().cat
  console.log(data)
  const [sorted, setSorted] = useState([])
  useEffect(() => {
    axios.get(`https://api.edamam.com/api/recipes/v2?q=${data}&app_id=0e593ec0&app_key=4f39e22c46d92f56f05bb7bd0ee083f4&type=public`)
      .then((res) => setSorted(res.data.hits))
  }, [data])
  const dataArr = [
    {
      "image": "https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/5e1cc137-8dfe-4ab0-89f1-488cf8fd4450.jpg",
      "title": "Grilling & BBQ"
    },
    {
      "image": "https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/4c90f65d-398c-462c-a165-eeca9e73aa8a.jpg",
      "title": "International Eats"
    },
    {
      "image": "https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/9985d8e3-87d3-4cfc-b312-b355a6630e76.jpg",
      "title": "Breakfast & Brunch"
    },
    {
      "image": "https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/b968c752-8018-429d-aa68-b0baf71a9129.jpg",
      "title": "Community Picks"
    },
    {
      "image": "https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/0e6210a9-7b32-4bae-a8a2-b1f8178cd33a.jpg",
      "title": "Quick & Easy"
    },
    {
      "image": "https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/4c90f65d-398c-462c-a165-eeca9e73aa8a.jpg",
      "title": "Copycat Recipes"
    }
  ]
  return (
    <div>
      <Nav />
      <div >
        {
          sorted.slice(0, 1).map((item) => (
            <img src={item.recipe.image} className='mainpagetopimg' />
          ))
        }
      </div>
      <div className='mianpagediv'>
        <p className='maintitle'>{data}</p>
        <p className='maindes'>In honor of the summer season, we've rounded up the best grilling and BBQ recipes, including apps, burgers, grilled chicken, sides and desserts.</p>
        <div className='exploremegadiv'>
          {dataArr.map((item) => (
            <div className='exploremoreminidiv'>
              <img src={item.image} className='exploremoreimg' />
              <p className='exploremorep'><Link to={`/exploremore/${item.title}`} className="linktexp">{item.title}</Link></p>
            </div>
          ))}
        </div>
      </div>
      <Banner/>
      <Craving/>
      <Trending/>
      <Special/>
      <Search/>
      <FooterText/>
    </div>
  )
}

export default MainPage2