import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import './profilepage.css'

function ProfilePage() {
  const userid = sessionStorage.getItem("userid")
  const [username,setUsernaem] = useState("")
  useEffect(()=>{
    axios.get(`https://food-backend-gub7.onrender.com/getuserdetails/${userid}`)
    .then((res)=>setUsernaem(res.data))
  })
  return (
    <div>
      <Nav/>
      <div className='profilecoverphoto'>
      </div>
      <div className='mainprofile'>
        <div className='profileitems'>
          <img src="https://img-nonprod.sndimg.com/food/image/upload/w_202,h_202,q_80,c_fill,fl_progressive/v1/qa1/fdc/img/placeholder/avatar.jpg" className='profileimg'/>
          <p className='emailtag'>@{username}</p>
        </div>
        <div className='datediv'>
          <p className='datep'>Date  Joined :- 07/08/23</p>
        </div>
      </div>
      <div className='extraprofilediv'>
        <div className=''>
          <ul>

          </ul>
        </div>
      </div>
    </div>  
  )
}

export default ProfilePage