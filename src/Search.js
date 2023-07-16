import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './search.css'

function Search() {
  const [searchText,setSearchText] = useState("")
  return (
    <div className='searchdiv'>
        <p className='searchtitle'>FIND MORE RECIPES</p>
        <input type={"text"} placeholder="Search" className='searchinput' onChange={(e)=>setSearchText(e.target.value)}/>
        <button className='ssearchbtn'><Link to={`/search/${searchText}`}className ="searchlinktt">Search</Link></button>
    </div>
  )
}

export default Search