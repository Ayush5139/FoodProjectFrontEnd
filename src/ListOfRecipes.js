import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import './listofrecipies.css'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Footer from './Footer'

function ListOfRecipes() {
    const category = useParams().cat
    console.log(category)
    const [sorted, setSorted] = useState([])
    useEffect(() => {
        axios.get(`https://api.edamam.com/api/recipes/v2?q=${category}&app_id=0e593ec0&app_key=4f39e22c46d92f56f05bb7bd0ee083f4&type=public`)
            .then((res) => setSorted(res.data.hits))
    },[category])
    console.log(sorted)
    return (
        <div>
            <Nav />
            <div className='recipepagecontainer'>
                <p className='repicemulticat'>PART OF Kids &amp; Family</p>
                <h1 class="recipagetitle">10 {category}</h1>
                <p class="recipepagedes">Whether you're packing <a href="healthy-lunch-box-ideas-6050">lunch for the kiddos</a> or looking for <a href="5-ingredient-lunches-6084">something quick</a> to make the whole family, we've got you covered with these fun, easy meals. The best part? They come together in less than 20 minutes with minimal ingredients. </p>
                <div>
                    <img src='https://play-lh.googleusercontent.com/dVsv8Hc4TOUeLFAahxR8KANg22W9dj2jBsTW1VHv3CV-5NCZjP9D9i2j5IpfVx2NTB8' className='socialicons' />
                    <img src='https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png' className='socialicons' />
                    <img src='https://www.pngitem.com/pimgs/m/570-5702670_message-icon-circle-teal-hd-png-download.png' className='socialicons' />
                </div>
                {sorted.slice(0,10).map((item) => (
                    <div className='recipemaincontainer'>
                        <img src={item.recipe.image} className='recipemainimg' />
                        <div className='recipefloatingdiv'>
                            <p className='floatingrecipe'>Recipe</p>
                            <p className='floatingtitle'><Link to={`/item/${item.recipe.uri.split("recipe_")[1]}`} className='listofrecipeslink'>{item.recipe.label}</Link></p>
                            <p class="floatingdes">“I made these this morning with pepperoni and pepper jack cheese. They were great! I’ll make them again.”</p>
                            <p class="floatingauth">-JackieRay M. </p>
                        </div>
                    </div>
                ))
                }
            </div>
            <div className='recipefooterdiv'>
                <Footer/>
            </div>
        </div>
    )
}

export default ListOfRecipes