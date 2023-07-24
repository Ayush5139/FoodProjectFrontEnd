import React, { useState } from 'react'
import './footer.css'
import { FaAngleDoubleRight, FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp, FaArrowDown, FaBackward, FaBookmark, FaEnvelope, FaFacebook, FaInstagram, FaPinterest, FaSave, FaSearch, FaStar, FaTwitter, FaUser, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import FooterText from './FooterText'

function Footer() {
    const mostSearched = [
        {
            "title": "air fryer recipes"
        },
        {
            "title": "slow-cooker recipes"
        },
        {
            "title": "top-copycat recipies"
        },
        {
            "title": "japanese food"
        },
        {
            "title": "weekend eats"
        },
        {
            "title": "healty lunches"
        }
    ]

    const [searchText, setSearcText] = useState("")
    const functionbtn = document.getElementsByTagName("button")
    document.addEventListener("keyup", (event) => {
        var name = event.key;
        if (name === 'Enter' && searchText !== "") {
            window.location.href = `http://localhost:3000/search/${searchText}`
        }
    }, false)
    return (
        <div>
            <div className='footernav'>
                <div className='footersearch'>
                    <p className='footerp'>I WANT TO MAKE<input type="text" placeholder='Search here or try our suggestions below' className='footerinp' onChange={(e) => setSearcText(e.target.value)} /></p>
                    <hr className='footerhr'></hr>
                    <button className='footerbtn'><Link to={`/search/${searchText}`} className="searchlinktt">Search</Link></button>
                </div>
                <div className='suggestiondiv'>
                    <ul>

                        {
                            mostSearched.map((item) => (
                                <li className='suggestionp' type="none"><Link to={`/recipe/${item.title}`} className="footerlinktt">{item.title}</Link></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <FooterText />
        </div>
    )
}

export default Footer