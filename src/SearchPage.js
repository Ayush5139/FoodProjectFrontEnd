import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav'
import './SearchPage.css'
import { FaAngleDoubleRight, FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp, FaArrowDown, FaBackward, FaBookmark, FaSave, FaSearch, FaStar, FaUser } from 'react-icons/fa'

function SearchPage() {
    const reqText = useParams().text
    console.log(reqText)
    const [searchedData, setSearchData] = useState([])
    useEffect(() => {
        axios.get(`https://api.edamam.com/api/recipes/v2?q=${reqText}&app_id=0e593ec0&app_key=4f39e22c46d92f56f05bb7bd0ee083f4&type=public`)
            .then((res) => setSearchData(res.data.hits))
    }, [reqText])
    const datalength = searchedData.length
    console.log(datalength)
    console.log(searchedData)
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return (
        <div>
            <Nav />
            <div>
            </div>
            <div>
                <p className='searchresults'>{datalength} Results</p>
            </div>
            <div className='searchmain'>
                <div className='multicards'>
                    {
                        searchedData.map((item) => (
                            <div className='searchcards'>
                                <img src={item.recipe.image} className='searchcardimg' />
                                <p className='searchcardtitle'>{item.recipe.label}</p>
                                <p className='searchcardauthor'> By Author Author</p>
                                <div className='searchsubdiv'>
                                    <p>{getRndInteger(2,5)} <FaStar/></p>
                                    <p>{item.recipe.totalTime} Minutes</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SearchPage