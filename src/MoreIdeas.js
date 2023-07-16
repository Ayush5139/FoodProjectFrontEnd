import React from 'react'
import BAAraa from './BAAraa'
import './moreidea.css'

function MoreIdeas() {
    return (
        <div className='moreideadiv'>
            <div className='moreideaminidiv'>
                <h2 style={{fontSize:"32px"}}>MORE IDEAS</h2>
                {/* <p className='moreideaviewall'>View All</p> */}
            </div>
            <div className='trendinallmapdiv'>
                <div className='trendingmapdiv'>
                    <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/39/46/39/WM8rgRclQsGroxlo7eHA_0S9A3950.jpg' className='trendinimg' />
                    <p className='trendingp'>Chicken Tikka Masala</p>
                </div>
                <div className='trendingmapdiv'>
                    <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/39/46/39/WM8rgRclQsGroxlo7eHA_0S9A3950.jpg' className='trendinimg' />
                    <p className='trendingp'>Chicken Tikka Masala</p>
                </div>
                <div className='trendingmapdiv'>
                    <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/39/46/39/WM8rgRclQsGroxlo7eHA_0S9A3950.jpg' className='trendinimg' />
                    <p className='trendingp'>Chicken Tikka Masala</p>
                </div>
                <div className='trendingmapdiv'>
                    <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/39/46/39/WM8rgRclQsGroxlo7eHA_0S9A3950.jpg' className='trendinimg' />
                    <p className='trendingp'>Chicken Tikka Masala</p>
                </div>
            </div>
            <div className='morebardiv'></div>
        </div>
    )
}

export default MoreIdeas