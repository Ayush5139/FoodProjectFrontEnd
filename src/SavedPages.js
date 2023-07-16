import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import Footer from './Footer'
import Nav from './Nav'
import './savedpages.css'

function SavedPages() {
    const [loggedin, setLoggedIn] = useState(true)
    useEffect(() => {
        if (sessionStorage.getItem("userid") == " " || sessionStorage.getItem("userid") == null) {
            setLoggedIn(false)
        }
    }, [])
    const userid = sessionStorage.getItem("userid")
    console.log("saved pages", userid)
    const [savedRecipes, setSavedRecipes] = useState([])
    useEffect(() => {
        if (userid !== " " || userid !== null) {
            axios.get(`https://food-backend-gub7.onrender.com/getsavedrecipes/${userid}`)
            .then((res) => setSavedRecipes(res.data))
        }
    }, [userid])
    console.log(savedRecipes)
    return (
        <div>
            <div>
                <Nav />
                <div className='savesdiv'>
                    <p className='savesp'>Saves</p>
                </div>
                {
                    loggedin ?
                        <div>
                            <div className='boarddiv'>
                                <p className='boardp'>Recipe</p>
                            </div>
                            <div className='mainsavedpagesdiv'>
                                {/* <div className='mainsaveddiv'>
                                    <div className='displaycard'>
                                        <button className='plusbtn'><FaPlusCircle /></button>
                                        <p className='plusp'>New Board</p>
                                    </div>
                                </div> */}
                                {savedRecipes.map((item) => (
                                    <div className='minimapimage'>
                                        <img src={item.image} className="mainsaveimage" />
                                        <img src={item.authorImage} className="mainauthorimage"/>
                                        <p className='savedtitle'>{item.name}</p>
                                        <p className='savedauthor'>{item.authorName}</p>
                                        <p className='savedrating'>Rating</p>
                                    </div>
                                ))}
                            </div>
                            <Footer />
                        </div> :
                        <div>
                            <p className='mustloginp'>You Must Login First To Save Recipes</p>
                        </div>
                }
            </div>
        </div>
    )
}

export default SavedPages