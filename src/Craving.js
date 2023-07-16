import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './cravin.css'

function Craving() {
    const [permData,setPermData] = useState([])
    useEffect(()=>{
        axios.get("https://api.edamam.com/api/recipes/v2?type=public&q=craving&app_id=0e593ec0&app_key=4f39e22c46d92f56f05bb7bd0ee083f4")
        .then((res)=>setPermData(res.data.hits))
    },[])
    return (
        <div className='maincravingdiv'>
            <h2 style={{fontSize:"32px"}}>WHAT WE'RE CRAVING</h2>
            <div className='cravindiv'>
                <div>
                    <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/79/94/4/MDUNtFdSSheVHJJwGTqC_0S9A0331.jpg' className='cravindivimg' />
                    <div className='minicravingdiv'>
                        <h3 className='minicravindivhead'>Collection</h3>
                        <p className='minicravingdivtitle'><Link to={"/recipe/Freezer-Friendly"} className="cravlinktt">10 Freezer-Friendly Meals</Link></p>
                    </div>
                </div>
                <div>
                    <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/22/92/27/kz2OEDD3Su7NHGSwqkJX_0S9A9846.jpg' className='cravindivimg' />
                    <div className='minicravingdiv'>
                        <h3 className='minicravindivhead'>Collection</h3>
                        <p className='minicravingdivtitle'><Link to={"/recipe/Lunch for Kids"} className="cravlinktt">10 Lunch Ideas for Kids</Link></p>
                    </div>
                </div>
                <div>
                    <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/16/53/87/Z4xnvsOaR6yTYMT7u5LL_corn%20fritters-2.jpg' className='cravindivimg' />
                    <div className='minicravingdiv'>
                        <h3 className='minicravindivhead'>Collection</h3>
                        <p className='minicravingdivtitle'><Link to={"/recipe/Best Corn Recipes"} className="cravlinktt">10 Best Corn Recipes</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Craving