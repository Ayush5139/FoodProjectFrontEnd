import React from 'react'
import { Link } from 'react-router-dom'
import './exporemore.css'

function ExploreMore() {
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
        <div className='exploremorediv'>
            <h1 style={{fontSize:"32px"}}>EXPLORE MORE</h1>
            <div className='exploremegadiv'>
                {dataArr.map((item) => (
                    <div className='exploremoreminidiv'>
                        <img src={item.image} className='exploremoreimg' />
                        <p className='exploremorep'><Link to={`/exploremore/${item.title}`} className="linktexp">{item.title}</Link></p>
                    </div>
                ))}
            </div>
            <div className='explorebar'>

            </div>
        </div>
    )
}

export default ExploreMore