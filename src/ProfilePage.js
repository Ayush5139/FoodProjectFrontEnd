import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import './profilepage.css'

function ProfilePage() {
  const userid = sessionStorage.getItem("userid")
  const [username, setUsernaem] = useState("")
  const [titleformap, setTiteformap] = useState("")
  useEffect(() => {
    axios.get(`https://food-backend-gub7.onrender.com/getuserdetails/${userid}`)
      .then((res) => setUsernaem(res.data))
  })
  console.log(username)
  const [reviews, setReviews] = useState([])
  function getUserReviews() {
    axios.get(`https://food-backend-gub7.onrender.com/getuserrviews/${username}`)
      .then((res) => setReviews(res.data))
    setTiteformap("Reviews")
  }
  function getUserQuestions() {
    axios.get(`https://food-backend-gub7.onrender.com/getuserques/${username}`)
      .then((res) => setReviews(res.data))
    setTiteformap("Questions")
  }
  console.log(reviews)
  return (
    <div>
      <Nav />
      <div className='profilecoverphoto'>
      </div>
      <div className='mainprofile'>
        <div className='profileitems'>
          <img src="https://img-nonprod.sndimg.com/food/image/upload/w_202,h_202,q_80,c_fill,fl_progressive/v1/qa1/fdc/img/placeholder/avatar.jpg" className='profileimg' />
          <p className='emailtag'>@{username}</p>
        </div>
        <div className='datediv'>
          <p className='datep'>Date  Joined :- 07/08/23</p>
        </div>
      </div>
      <div className='extraprofilediv'>
        <div className='listdiv'>
          <ul type="none">
            <li onClick={getUserQuestions}>Questions</li>
            <li onClick={getUserReviews}>Reviews</li>
          </ul>
        </div>
        <div className='profilemapdiv'>
          <h1>{titleformap}</h1>
          {
            reviews.map((item) => (
              <div className='profilemapping'>
                <p>{item.Review}</p>
                <Link to={`/item/${item.RecipeId}`} className="profilemaplink">{item.RecipeName}</Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProfilePage