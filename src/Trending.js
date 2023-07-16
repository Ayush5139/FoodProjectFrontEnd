import React from 'react'
import './trending.css'

function Trending() {
  return (
    <div className='trendindiv'>
      <div className='trendingminidiv'>
        <h2 style={{fontSize:"32px"}}>TRENDING NOW</h2>
        {/* <p className='trendingviewall'>View All</p> */}
      </div>
      <div className='trendinallmapdiv'>
        <div className='trendingmapdiv'>
          <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/93/50/dKELoTKxTcW3dfYDAe1g_0S9A2821.jpg' className='trendinimg'/>
          <p className='trendingp'>Pineapple Zucchini Bread</p>
        </div>
        <div className='trendingmapdiv'>
          <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/93/50/dKELoTKxTcW3dfYDAe1g_0S9A2821.jpg' className='trendinimg'/>
          <p className='trendingp'>Pineapple Zucchini Bread</p>
        </div>
        <div className='trendingmapdiv'>
          <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/93/50/dKELoTKxTcW3dfYDAe1g_0S9A2821.jpg' className='trendinimg'/>
          <p className='trendingp'>Pineapple Zucchini Bread</p>
        </div>
        <div className='trendingmapdiv'>
          <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/93/50/dKELoTKxTcW3dfYDAe1g_0S9A2821.jpg' className='trendinimg'/>
          <p className='trendingp'>Pineapple Zucchini Bread</p>
        </div>
      </div>
    </div>
  )
}

export default Trending