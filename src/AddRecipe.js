import React, { useState } from 'react'
import Footer from './Footer'
import Nav from './Nav'
import './addrecipe.css'
import axios from 'axios'

function AddRecipe() {
  const [name,setName] = useState("")
  const [description,setDescription] = useState("")
  const [catgories,setCategories] = useState("")
  const [preptime,setPrepTime] = useState()
  const [cooktime,setCookTime] = useState()
  const [serves,setServes] = useState()
  const [ingredients,setIngredients] = useState("")
  const [directions,setDirections] = useState("")
  const [image,setImage] = useState("")
  console.log(description)

  function sendRecipeData(){
    const newObj={
      Name:name,
      Description:description,
      Catgories:catgories,
      Preptime:preptime,
      Cooktime:cooktime,
      Serves:serves,
      Ingredients:ingredients,
      Directions:directions,
      Image:image
    }
    axios.post("https://food-backend-gub7.onrender.com/addnewrecipe",{data:newObj})
    .then((res)=>console.log(res))
  }
  return (  
    <div>
      <Nav />
      <div className='addrecipemaindiv'>
        <h2 className='addrecipep'>Add A Recipe</h2>
        <input type="text" placeholder='Recipe Title' className='inptitle' onChange={(e)=>setName(e.target.value)} />
        <textarea rows="6" cols="85" name="comment" className="textarerecipe" onChange={(e)=>setDescription(e.target.value)}>
          Recipe Description
        </textarea>
        <p className='categoriesp'>Categories</p>
        <input type="text" placeholder='Ex: Mexican, Dessert, Pudding, Brunch' className='categoryimput' onChange={(e)=>setCategories(e.target.value)}/>
        <div className='multipleinps'>
          <div className='imgboxrecipe'><p>imgboxrecipe</p></div>
          <div className='timeinputs'>
            <p className='timep'>Prep Time</p>
            <input type="text" placeholder='   ---' className='inpputtime' onChange={(e)=>setPrepTime(e.target.value)}/>
            <p className='timep'>Cook Time</p>
            <input type="text" placeholder='   ---' className='inpputtime' onChange={(e)=>setCookTime(e.target.value)} />
            <hr className='multiinputhr'></hr>
            <p className='timep'>Serves</p>
            <input type="text" placeholder='   ---' className='inpputtime'onChange={(e)=>setServes(e.target.value)} />
            <p className='timep'>Yeild</p>
            <input type="text" placeholder='   ---' className='inpputtime' />
          </div>
        </div>
        <p className='categoriesp'>Ingredients</p>
        <p>Enter your ingredients one at a time or paste them into the box below and hit enter.</p>
        <textarea rows="6" cols="85" name="comment" className="textarerecipe" onChange={(e)=>setIngredients(e.target.value)}>
          Ex: 1 tsp Cayenne Pepper
        </textarea>
        <p className='categoriesp'>DIRECTIONS</p>
        <p>Enter your ingredients one at a time or paste them into the box below and hit enter.</p>
        <textarea rows="6" cols="85" name="comment" className="textarerecipe" onChange={(e)=>setDirections(e.target.value)}>
        Ex: Place all ingredients in blender.
        </textarea>
        <p>SAVE THIS RECIPE AS:</p>
        <div className='radiobtnsdiv'>
          <div>
            <input type="radio" name='type' checked />
            <label>Public</label>
          </div>
          <div>
            <input type="radio" name='type'/>
            <label>Private</label>
          </div>
        </div>
        <p>When you click Save, additional changes cannot be made until your recipe is published.</p>
        <p>By clicking Save, you agree to our terms of service</p>
        <div className='savebtndiv'>
          <button className='savebtn' onClick={sendRecipeData}>Save</button>
          <p>or</p>
          <button className='cancelbtn'>Cancel</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AddRecipe