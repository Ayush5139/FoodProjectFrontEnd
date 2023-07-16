import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './reviews.css'

function Reviews() {
    const [reviewArr, setReviewArr] = useState([])
    useEffect(() => {
        axios.get("https://food-backend-gub7.onrender.com/getallreviews")
            .then((res) => setReviewArr(res.data))
    },[])
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return (
        <div className='mainreview'>
            <div className='minireview'>
                <h2 style={{fontSize:"31px"}}>FRESH FROM OUR COMMUNITY</h2>
                <p className='minireviewall'>View All</p>
            </div>
            <div className='divbeforemap'>
                {
                    reviewArr.slice(0,3).map((item) => (
                        <div className='minireviewmap'>
                            <div style={{ display: "flex" }}>
                                <img src='https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=' className='minireviewmapimg' />
                                <h3 className='minireviewmaptitle'>{item.UserName} reviewed <Link to={`item/${item.RecipeId}`} className='reviewrecipelink'><span className='linkspan'>{item.RecipeName}</span></Link></h3>
                            </div>
                            <p className='minireviewmaprating'>{getRndInteger(2,5)}</p>
                            <p className='minireviewmapdes'>{item.Review}</p>
                            <div className='minireviewmapmini'>
                                <p className='minireviewmaptime'>{getRndInteger(1,10)} Hours Ago</p>
                                <p className='minireviewmapreply'>reply</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Reviews