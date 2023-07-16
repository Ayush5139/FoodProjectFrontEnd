import React from 'react'
import { Link } from 'react-router-dom'
import './dontmiss.css'

function DontMiss() {
    return (
        <div className='dontmissdiv'>
            <div className='dontmissminidiv'>
                <h2 style={{fontSize:"32px"}}>DON'T MISS</h2>
                {/* <p className='dontmissviewall'>View All</p> */}
            </div>
            <div className='cravindiv'>
                <div>
                    <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/18/48/40/Ygd0UxnRCWucd7eos48h_0S9A4432.jpg' className='cravindivimg' />
                    <div className='minidontmissdiv'>
                        <h3 className='minicravindivhead'>Collection</h3>
                        <p className='minicravingdivtitle'>45 Summer Salads</p>
                    </div>
                </div>
                <div>
                    <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/18/48/40/Ygd0UxnRCWucd7eos48h_0S9A4432.jpg' className='cravindivimg' />
                    <div className='minidontmissdiv'>
                        <h3 className='minicravindivhead'>Collection</h3>
                        <p className='minicravingdivtitle'>45 Summer Salads</p>
                    </div>
                </div>
                <div>
                    <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/18/48/40/Ygd0UxnRCWucd7eos48h_0S9A4432.jpg' className='cravindivimg' />
                    <div className='minidontmissdiv'>
                        <h3 className='minicravindivhead'>Collection</h3>
                        <p className='minicravingdivtitle'>45 Summer Salads</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DontMiss