import React from 'react'
import './footer.css'
import { FaAngleDoubleRight, FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp, FaArrowDown, FaBackward, FaBookmark, FaEnvelope, FaFacebook, FaInstagram, FaPinterest, FaSave, FaSearch, FaStar, FaTwitter, FaUser, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
    const mostSearched = [
        {
            "title":"air fryer recipes"
        },
        {
            "title":"slow-cooker recipes"
        },
        {
            "title":"top-copycat recipies"
        },
        {
            "title":"japanese food"
        },
        {
            "title":"weekend eats"
        },
        {
            "title":"healty lunches"
        }
    ]
    return (
        <div>
            <div className='footernav'>
                <div className='footersearch'>
                    <p className='footerp'>I WANT TO MAKE<input type="text" placeholder='Search here or try our suggestions below' className='footerinp' /></p>
                    <hr className='footerhr'></hr>
                </div>
                <div className='suggestiondiv'>
                    <ul>

                        {
                            mostSearched.map((item)=>(
                                <li className='suggestionp' type="none"><Link to={`/recipe/${item.title}`} className="footerlinktt">{item.title}</Link></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer