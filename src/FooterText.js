import React from 'react'
import { FaAngleDoubleRight, FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp, FaArrowDown, FaBackward, FaBookmark, FaEnvelope, FaFacebook, FaInstagram, FaPinterest, FaSave, FaSearch, FaStar, FaTwitter, FaUser, FaYoutube } from 'react-icons/fa'
import "./footer.css"

function FooterText() {
    function backtotop(){
        document.body.scrollTop=0
        document.documentElement.scrollTop=0
    }
    return (
        <div>
            <div className='adfooterdiv'>
                <div className='whitediv'>
                    <FaFacebook className='socialiconsfooter'/>
                    <FaInstagram className='socialiconsfooter'/>
                    <FaPinterest className='socialiconsfooter'/>
                    <FaTwitter className='socialiconsfooter'/>
                    <FaYoutube className='socialiconsfooter'/>
                    <FaEnvelope className='socialiconsfooter'/>
                    <button onClick={backtotop} className="backtotopbtn">Back To Top &#x2191;</button>
                </div>
                <div>
                    <ul className='whitediv' type="none">
                        <li>All Categories</li>
                        <li>Site Map</li>
                        <li>About Us</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FooterText