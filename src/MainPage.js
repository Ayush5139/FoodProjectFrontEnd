import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import './mainpage.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp, FaArrowAltCircleRight, FaArrowDown, FaArrowLeft, FaBackward, FaBookmark, FaCamera, FaClock, FaDownload, FaHeart, FaMix, FaMixer, FaPalette, FaPrint, FaSave, FaSearch, FaShare, FaUser } from 'react-icons/fa'
import Search from './Search'
import FooterText from './FooterText'
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";

function MainPage() {
    const name = useParams().name
    const [random, setRamdom] = useState(false)
    console.log(name)
    const [recipe, setRecipe] = useState([])
    const [extraRecipe, setEctraRecipe] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [dishtype, setDishtype] = useState("")
    const [nutitients, setNutrients] = useState()
    const [calories,setCalories] = useState(0)
    let caloriesFinal = calories.toFixed(2)
    useEffect(() => {
        axios.get(`https://api.edamam.com/api/recipes/v2/${name}?type=public&app_id=0e593ec0&app_key=4f39e22c46d92f56f05bb7bd0ee083f4`)
            .then((res) => { setRecipe(res.data.recipe); setEctraRecipe(res.data.recipe.ingredients); setIngredients(res.data.recipe.ingredientLines); setDishtype(res.data.recipe.dishType[0]); setNutrients(res.data.recipe.totalDaily);setCalories(res.data.recipe.calories)})
    }, [name])
    const [suggestedRecipes, setSuggestedRecipes] = useState([])
    useEffect(() => {
        axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${dishtype}&app_id=0e593ec0&app_key=4f39e22c46d92f56f05bb7bd0ee083f4`)
            .then((res) => setSuggestedRecipes(res.data.hits))
    }, [dishtype])
    const [reviews, setReviews] = useState([])
    const [questions, setQuestions] = useState([])
    console.log(recipe.label)
    useEffect(() => {
        axios.get(`https://food-backend-gub7.onrender.com/getreview/${name}`)
            .then((res) => setReviews(res.data))
        axios.get(`https://food-backend-gub7.onrender.com/getques/${name}`)
            .then((res) => setQuestions(res.data))
    }, [random, name, recipe])
    console.log(recipe)
    console.log(extraRecipe)
    const [userQuestion, setUserQuestion] = useState("")
    const userid = sessionStorage.getItem("userid")
    const [userReview, setUserReview] = useState("")
    function askQuestion() {
        const newObj = {
            _id: userid,
            review: userQuestion,
            RecipeId: name
        }
        axios.post("https://food-backend-gub7.onrender.com/addques", { data: newObj })
            .then((res) => console.log(res))
        setRamdom(!random)
    }

    function saveRecipe() {
        const newObj = {
            id: userid,
            Recipe: recipe
        }
        axios.post("https://food-backend-gub7.onrender.com/saverecipe", { data: newObj })
            .then((res) => console.log(res))
    }

    function addReview() {
        const newObj = {
            _id: userid,
            recipeName: recipe.label,
            review: userReview,
            RecipeId: name
        }
        axios.post("https://food-backend-gub7.onrender.com/addreview", { data: newObj })
            .then((res) => console.log(res))
        setRamdom(!random)
        setExtraVisible(false)
    }
    const [extraVisible, setExtraVisible] = useState(false)
    function changeVisible() {
        setExtraVisible(true)
    }

    function changeVisibleAnther() {
        setExtraVisible(false)
    }

    const ratinArr = []

    function getRndInteger(min, max) {
        const ratingg = Math.floor(Math.random() * (max - min + 1)) + min;
        for (let i = 1; i <= ratingg; i++) {
            ratinArr.push(i)
        }
    }

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    const currentUrl = window.location.href;
    console.log(currentUrl);

    const [shareDiv, setShreDiv] = useState(false)
    function changeSharediv() {
        setShreDiv(true)
    }

    function changeSharedivant() {
        setShreDiv(false)
    }
    function printFunc() {
        window.print()
    }

    function downloadFunc() {
        fetch('https://cors-anywhere.herokuapp.com/' + currentUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/pdf',
            },
        })
            .then((response) => response.blob())
            .then((blob) => {
                // Create blob link to download
                const url = window.URL.createObjectURL(
                    new Blob([blob]),
                );
                const link = document.createElement('a');
                link.href = currentUrl;
                link.setAttribute(
                    'download',
                    `FileName.pdf`,
                );

                // Append to html link element page
                document.body.appendChild(link);

                // Start download
                link.click();

                // Clean up and remove the link
                link.parentNode.removeChild(link);
            });
    }

    // console.log(dishtype)
    // useEffect(() => {
    //     axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${dishtype}&app_id=0e593ec0&app_key=4f39e22c46d92f56f05bb7bd0ee083f4`)
    //         .then((res) => ( res.data.hits))
    // }, [dishtype])

    function nextRecipeFunction() {
        const randomNumber = Math.floor(Math.random() * (19 - 0 + 1)) + 0;
        console.log(randomNumber)
        setRecipe(suggestedRecipes[randomNumber].recipe)
    }

    useEffect(() => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }, [])

    console.log("nutrientfewfwes", nutitients)

    const [seeNutrients, setSeeNutrients] = useState(false)

    function seeNutrientsFunc() {
        setSeeNutrients(true)
    }

    function hideNutrientsFunc() {
        setSeeNutrients(false)
    }


    return (
        <div style={{ position: "relative", overflowY: "hidden" }}>
            <Nav />
            <div className='mainpagediv'>
                <div className='mainpageminidiv'>
                    <button onClick={nextRecipeFunction} className="nextrecipebtn"><FaAngleDoubleLeft /> Previous Recipe</button>
                    <button onClick={nextRecipeFunction} className="nextrecipebtn">Next Recipe <FaAngleDoubleRight /></button>
                </div>
            </div>
            <div>
                <div className='mainpageminidiv'>
                    <div>
                        <p className='recipecategory'>Recipies / {recipe.dishType}</p>
                        <p className='recipetitle'>{recipe.label}</p>
                        {getRndInteger(1, 5)}
                        {
                            ratinArr.map((item) => (
                                <a className='starrating'>&#9733;</a>
                            ))
                        }({getRandomNumber(500, 10000)})
                    </div>
                    <div className='mainimgdiv'>
                        <img src='https://play-lh.googleusercontent.com/dVsv8Hc4TOUeLFAahxR8KANg22W9dj2jBsTW1VHv3CV-5NCZjP9D9i2j5IpfVx2NTB8' className='socialicons' />
                        <img src='https://www.pngitem.com/pimgs/m/570-5702670_message-icon-circle-teal-hd-png-download.png' className='socialicons' />
                    </div>
                </div>
                <hr></hr>
                <div className='mainprofilediv'>
                    <img src="https://img.sndimg.com/food/image/upload/v1/gk-static/gk/img/avatar/burger.png" className='mainprofileimg' />
                    <p> Submitted By USerName USername</p>
                </div>
                <p className='firstreview'>"The quickest and easiest pizza to make. Even the kids can do it. Even make funny faces for kids parties. Clowns, pirates,monsters.....etc i put it in vegetarian because you can omit the ham"</p>
                <div className='mainbtndiv'>
                    <button className='mainbtns' onClick={saveRecipe}><FaBookmark /></button>
                    <button className='mainbtns' onClick={downloadFunc}> <FaDownload /> </button>
                    <button className='mainbtns' onClick={printFunc}> <FaPrint /></button>
                    <button className='mainbtns' onClick={changeSharediv}><FaShare /></button>
                    <button className='mainyellowbtn'> <FaCamera /> I Made This </button>
                </div>
                <img src={recipe.image} className='mainmainimg' />
                <div className='multiimgdiv'>
                    <img src={recipe.image} className='mainminiimg' />
                    <img src={recipe.image} className='mainminiimg' />
                    <img src={recipe.image} className='mainminiimg' />
                    <img src={recipe.image} className='mainminiimg' />
                </div>
                <div className='detailsdiv'>
                    <div>
                        <p><FaClock /> Ready In : {recipe.totalTime}Minutes</p>
                        <p><FaMixer /> Ingredients : {extraRecipe.length}</p>
                        <p onClick={seeNutrientsFunc}>Nutrion Information</p>
                    </div>
                    <div>
                        <p><FaPalette />Serves:{recipe.yield}</p>
                    </div>
                </div>
                <hr></hr>
                <div className='detailsmaindiv'>
                    <div className='ingredientsdiv'>
                        <p className='ingretitle'>Directions</p>
                        {
                            extraRecipe.map((item, index) => (
                                <div>
                                    <p className='iteminingredients'> <b>{index + 1}.</b>  {item.text}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='ingredientsdiv'>
                        <p className='ingretitle'>Ingredients</p>
                        {
                            ingredients.map((item, index) => (
                                <div>
                                    <p className='iteminingredients'><b>{index + 1}.</b>  {item}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='questionsdiv'>
                    <p className='questitle'>Questions & Replies</p>
                    <div className='questionsinputdiv'>
                        <img src='https://img-nonprod.sndimg.com/food/image/upload/w_45,h_45,q_100,c_thumb/v1/qa1/fdc/img/placeholder/avatar.jpg' className='quesimg' />
                        <input type="text" placeholder='Ask A Question' className='quesinp' onChange={(e) => setUserQuestion(e.target.value)} />
                        <button className='quesbtn' onClick={askQuestion}>Submit</button>
                    </div>
                    {questions.map((item) => (
                        <div className='revirediv'>
                            <p className='reviewimg'><img src='https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/UlIqmHJn-SK.gif' className='reviewuserimg' />Rating</p>
                            <p className='reviewp'>{item.Question}</p>
                            <div className='subreviewdiv'>
                                <p className='authorp'>{item.UserName}</p>
                                <p><FaHeart /></p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mainreviewdiv'>
                    <div className='minireviewdiv'>
                        <p className='questitle'>Reviews</p>
                        <button className='quesbtn' onClick={changeVisible}>Write A Review</button>
                    </div>
                    {reviews.map((item) => (
                        <div className='revirediv'>
                            <p className='reviewimg'><img src='https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/UlIqmHJn-SK.gif' className='reviewuserimg' />                        {
                                ratinArr.map((item) => (
                                    <a className='starrating'>&#9733;</a>
                                ))
                            }</p>
                            <p className='reviewp'>{item.Review}</p>
                            <div className='subreviewdiv'>
                                <p className='authorp'>{item.UserName}</p>
                                <p><FaHeart /></p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='suggestedrecipes'>
                    <div className='subsuggesteddiv'>
                        <p className='subsuggestedtitle'>You'll Also Love</p>
                        <p className='subsugestedlink'>View All recipes</p>
                    </div>
                    <div className='anothersubsuggeteddiv'>
                        {
                            suggestedRecipes.slice(0, 4).map((item) => (
                                <div className='sugestedmapdiv'>
                                    <img src={item.recipe.image} className="suggestedimg" />
                                    <p className='suggestedmaptitle'><Link to={`/item/${item.recipe.uri.split("recipe_")[1]}`} className="suggestedlink">{item.recipe.label}</Link></p>
                                    <p className='suggestedauthorp'>By Author</p>
                                    <p>                        {
                                        ratinArr.map((item) => (
                                            <a className='starrating'>&#9733;</a>
                                        ))
                                    }</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            {
                extraVisible ?
                    <div className='mainbluurdiv'>
                        <div className='reviewinptdiv'>
                            <button className='closereviewbtn' onClick={changeVisibleAnther}>X</button>
                            <p className='writeareviewtitle'>REVIEW THIS RECIPE</p>
                            <input type="text" placeholder='Post A review' onChange={(e) => setUserReview(e.target.value)} className="reviewinputt" />
                            <button onClick={addReview} className="postreviewbtn">Post</button>
                        </div>
                    </div>
                    :
                    null
            }
            {
                shareDiv ?
                    <div className='mainbluurdiv'>
                        <div className='sharediv'>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <p className='sharep'>Share Via:-</p>
                                <button onClick={changeSharedivant} style={{ width: "20px", height: "20px", margin: "5%" }}>X</button>
                            </div>
                            <FacebookShareButton
                                url={currentUrl}
                                title={recipe.label}
                            >
                                <FacebookIcon size={32} round />
                                Facebook
                            </FacebookShareButton>
                            <br />
                            <TwitterShareButton
                                url={currentUrl}
                                title={recipe.label}
                            >
                                <TwitterIcon size={32} round />
                                Twitter
                            </TwitterShareButton>
                        </div>
                    </div> :
                    null
            }
            {
                seeNutrients ?
                    <div className='mainbluurdiv'>
                        <div className='nutrientstable'>
                            <button onClick={hideNutrientsFunc} className="nutrientstablebtn">X</button>
                            <p>Nutrion Info</p>
                            <p>Serving Size: 1 {recipe.totalWeight} g</p>
                            <p>Servings Per Recipe: 1</p>
                            <table style={{padding:"2%"}}>
                                <th style={{width:"80%"}}>AMT. PER SERVING</th>
                                <th>% DAILY VALUE</th>
                                <tr>
                                    <td><b>Calories  {caloriesFinal} </b></td>
                                </tr>
                                {/* {
                                    for(let item in nutitients){

                                    }
                                } */}
                                <tr>
                                    <td>Calories</td>
                                    <td>25%</td>
                                </tr>
                                <tr>
                                    <td>Calories from Fat 131 g</td>
                                    <td>55 %</td>
                                </tr>
                                <tr>
                                    <td>Total Fat 14.6 g</td>
                                    <td>22 %</td>
                                </tr>
                                <tr>
                                    <td>Saturated Fat 6.6 g</td>
                                    <td>32 %</td>
                                </tr>
                                <tr>
                                    <td>Cholesterol 15.5 mg</td>
                                    <td>5 %</td>
                                </tr>
                                <tr>
                                    <td>Sodium 48.4 mg</td>
                                    <td>2 %</td>
                                </tr>
                                <tr>
                                    <td>Total Carbohydrate 26.3 g</td>
                                    <td>8 %</td>
                                </tr>
                                <tr>
                                    <td>Dietary Fiber 1.6 g</td>
                                    <td>6 %</td>
                                </tr>
                                <tr>
                                    <td>Sugars 16.8 g</td>
                                    <td>67 %</td>
                                </tr>
                                <tr>
                                    <td>Protein 2.3 g</td>
                                    <td>4 %</td>
                                </tr>
                            </table>
                        </div>
                    </div> :
                    null
            }
            <Search />
            <FooterText />
        </div>
    )
}

export default MainPage