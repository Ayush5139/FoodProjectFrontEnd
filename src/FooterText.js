import React from 'react'
import { FaAngleDoubleRight, FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp, FaArrowDown, FaBackward, FaBookmark, FaEnvelope, FaFacebook, FaInstagram, FaPinterest, FaSave, FaSearch, FaStar, FaTwitter, FaUser, FaYoutube } from 'react-icons/fa'

function FooterText() {
    return (
        <div>
            <div className='adfooterdiv'>
                <div className='whitediv'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaPinterest />
                    <FaTwitter />
                    <FaYoutube />
                    <FaEnvelope />
                    <p className='backtotopp'>Back To Top</p>
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