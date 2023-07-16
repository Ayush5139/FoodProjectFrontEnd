import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import axios from 'axios'
import { FaAlignJustify, FaAngleDoubleRight, FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp, FaArrowDown, FaBackward, FaBookmark, FaSave, FaSearch, FaUser } from 'react-icons/fa'

function Nav() {
  const popularArr = [
    { "title": "Casserole Recipes" },
    { "title": "Chili Recipes" },
    { "title": "Soup Recipes" },
    { "title": "Pasta Recipes" },
    { "title": "Bread Recipes" },
    { "title": "Cookie Recipes" },
    { "title": "Salad Recipes" },
    { "title": "Tofu Recipes" }
  ]
  const meatArr = [
    { "title": "Chicken Recipes" },
    { "title": "Salmon Recipes" },
    { "title": "Pork Chop Recipes" },
    { "title": "Ground Beef Recipes" },
    { "title": "Shrimp Recipes" }
  ]
  const healthyArr = [
    { "title": "  Keto Recipes" },
    { "title": "Healthy Recipes" },
    { "title": "Vegetarian Recipes" },
    { "title": "Vegan Recipes" },
    { "title": "Mediterranean Diet Recipes" },
    { "title": "Low-Carb Recipes" },
    { "title": "Gluten-Free Recipes" }
  ]
  const holidaysArr = [
    { "title": "Memorial Day Recipes" },
    { "title": "Juneteenth Recipes" },
    { "title": "4th of July Recipes" },
    { "title": "Halloween Recipes" },
    { "title": "Thanksgiving Recipes" },
    { "title": "Hanukkah Recipes" },
    { "title": "Christmas Recipes" },
    { "title": "New Year's Recipes" }
  ]
  const cusineArr = [
    { "title": "Mexican Recipes" },
    { "title": "Italian Recipes" },
    { "title": "Indian Recipes" },
    { "title": "Thai Recipes" },
    { "title": "Korean Recipes" },
    { "title": "French Recipes" },
    { "title": "Latin American Recipes" },
    { "title": "Chinese Recipes" },
    { "title": "Japanese Recipes" },
    { "title": "Spanish Recipes" }
  ]
  const seosonalArr = [
    { "title": "Spring Recipes" },
    { "title": "Summer Recipes" },
    { "title": "Fall Recipes" },
    { "title": "Winter Recipes" }
  ]
  const [login, setLogin] = useState(true)
  function changeLogin() {
    setLogin(!login)
  }
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  console.log(email)
  console.log(password)
  const [userID, setUserId] = useState("")
  const [count, setCount] = useState(0)
  function loginFunction() {
    const newObj = {
      email: email,
      password: password
    }
    axios.post("https://food-backend-gub7.onrender.com/login", { data: newObj })
      .then((res) => {
        sessionStorage.setItem("userid", res.data.userID)
        if (res.data.msg === "User has logged in successfully") {
          SetLoggedIn(!loggedIn)
          setShowMorePro(true)
        }
        else {
          alert("Invalid Password")
        }
      })
    setCount(count + 1)
  }
  function signUpFunction() {
    const newObj = {
      email: email,
      password: password
    }
    axios.post("https://food-backend-gub7.onrender.com/signup", { data: newObj })
      .then((res) => console.log(res))
  }
  const [loggedIn, SetLoggedIn] = useState(true)
  function changeLoggedIn() {
    SetLoggedIn(!loggedIn)
  }
  console.log(userID)

  const [showMorePro, setShowMorePro] = useState(true)
  useEffect(() => {
    if (sessionStorage.getItem("userid") == " " || sessionStorage.getItem("userid") == null) {
      setShowMorePro(false)
    }
  }, [count])
  console.log("usssusuus", sessionStorage.getItem("userid"))
  function logoutFunction() {
    sessionStorage.setItem("userid", " ")
    setCount(count - 1)
  }

  const [visible, setVisible] = useState("none")
  function changeVisible() {
    if (visible === "none") {
      setVisible("block")
    }
    if (visible === "block") {
      setVisible("none")
    }
  }
  return (
    <div>
      <div className='navdiv'>
        <div className='navextradiv'>
          <button className='extrabtn' onClick={changeVisible}> <FaAlignJustify /></button>
          <Link to={"/"} className="homelink"><svg width="150" height="45" viewBox="0 0 150 45" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M4.58971 5.51367C0.565612 5.51367 0.725993 9.59609 1.3092 11.6373H5.46451V41.3806C6.8642 44.5299 13.0461 43.7135 15.9622 42.9116V28.4773H26.4598C30.4839 28.4773 30.3235 23.9575 29.7403 21.6976H15.9622V12.5121H29.5216C33.5457 12.5121 33.0937 7.84648 32.3647 5.51367H4.58971Z" fill="currentColor" stroke="currentColor" stroke-width="0.437402"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M35.4265 18.6356C37.1032 16.5944 42.8624 12.8181 52.4852 14.0429C64.5138 15.5738 63.2016 28.9145 62.7642 31.3203C62.7534 31.3793 62.7422 31.4425 62.7302 31.5096C62.2552 34.1722 60.6923 42.9329 47.8925 43.7862C34.7704 44.661 31.7086 36.3504 31.4899 33.2886C31.2712 30.2268 31.0525 23.2283 35.4265 18.6356ZM43.0809 23.447C44.4225 21.6112 47.925 18.9411 51.4823 22.4312C51.7197 22.664 51.927 22.9287 52.0536 23.2362C52.3483 23.9521 52.7038 25.3345 52.7038 27.3836V32.2423C52.7038 32.6479 52.675 33.0541 52.5542 33.4413C52.1609 34.702 51.1437 36.559 49.2046 37.0065C46.5178 37.6265 43.6357 37.4653 42.5886 34.8617C42.4629 34.5492 42.403 34.216 42.3659 33.8812C42.0246 30.8017 41.7569 25.1021 43.0809 23.447Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M68.7645 18.7064C70.4412 16.6652 76.2003 12.8889 85.8232 14.1137C97.8517 15.6446 96.5395 28.9853 96.1021 31.3911C96.0914 31.4501 96.0801 31.5133 96.0681 31.5804C95.5931 34.243 94.0302 43.0037 81.2305 43.857C68.1084 44.7318 65.0466 36.4212 64.8279 33.3594C64.6092 30.2976 64.3905 23.2991 68.7645 18.7064ZM76.4189 23.5178C77.7604 21.682 81.263 19.0119 84.8203 22.502C85.0576 22.7349 85.265 22.9995 85.3915 23.307C85.6862 24.0229 86.0417 25.4054 86.0417 27.4544V32.3131C86.0417 32.7187 86.0129 33.1249 85.8921 33.5121C85.4988 34.7728 84.4817 36.6298 82.5425 37.0773C79.8557 37.6973 76.9737 37.5361 75.9265 34.9325C75.8008 34.62 75.741 34.2868 75.7038 33.952C75.3625 30.8725 75.0948 25.1729 76.4189 23.5178Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M129.905 1.13955C127.791 0.629246 122.819 0.221004 119.845 2.67046V14.0429C116.783 13.6055 109.697 13.3868 105.848 16.0112C101.037 19.2917 97.1002 27.6024 99.2872 35.4756C101.474 43.3489 112.191 47.2855 120.064 38.9748V42.9115C122.397 43.6405 127.893 44.6611 131.218 42.9115C134.542 41.1618 134.061 38.2458 133.405 37.0065H130.124L129.905 1.13955ZM119.626 20.9519V34.8304C119.626 34.9619 119.568 35.0864 119.464 35.1669C117.411 36.7567 112.899 38.7854 110.004 35.0382C106.286 30.2268 110.004 21.6974 113.284 20.6039C114.393 20.396 117.07 20.109 119.286 20.5323C119.486 20.5706 119.626 20.7482 119.626 20.9519Z" fill="currentColor"></path><path d="M119.845 2.67046L119.706 2.50163L119.626 2.56725V2.67046H119.845ZM129.905 1.13955L130.124 1.13822L130.123 0.967104L129.957 0.926953L129.905 1.13955ZM119.845 14.0429L119.814 14.2594L120.064 14.2951V14.0429H119.845ZM105.848 16.0112L105.725 15.8305L105.848 16.0112ZM99.2872 35.4756L99.0765 35.5341L99.2872 35.4756ZM120.064 38.9748H120.283V38.426L119.905 38.8244L120.064 38.9748ZM120.064 42.9115H119.845V43.0722L119.999 43.1202L120.064 42.9115ZM131.218 42.9115L131.319 43.105L131.218 42.9115ZM133.405 37.0065L133.598 36.9042L133.536 36.7878H133.405V37.0065ZM130.124 37.0065L129.905 37.0079L129.907 37.2252H130.124V37.0065ZM119.464 35.1669L119.331 34.994L119.464 35.1669ZM110.004 35.0382L110.177 34.9045L110.004 35.0382ZM113.284 20.6039L113.244 20.389L113.229 20.3917L113.215 20.3964L113.284 20.6039ZM119.286 20.5323L119.245 20.7471L119.286 20.5323ZM119.984 2.83928C121.422 1.65496 123.357 1.15186 125.214 1.01319C127.068 0.874704 128.817 1.10182 129.854 1.35214L129.957 0.926953C128.88 0.666977 127.085 0.434818 125.182 0.577001C123.28 0.718997 121.242 1.2365 119.706 2.50163L119.984 2.83928ZM120.064 14.0429V2.67046H119.626V14.0429H120.064ZM105.971 16.1919C107.849 14.9119 110.537 14.3145 113.16 14.0968C115.777 13.8796 118.298 14.0428 119.814 14.2594L119.876 13.8264C118.331 13.6056 115.777 13.4407 113.124 13.6609C110.476 13.8806 107.697 14.4862 105.725 15.8305L105.971 16.1919ZM99.498 35.4171C98.4189 31.5324 98.8493 27.5344 100.148 24.0985C101.447 20.66 103.61 17.8022 105.971 16.1919L105.725 15.8305C103.275 17.5008 101.064 20.4385 99.7388 23.9438C98.413 27.4517 97.9686 31.5456 99.0765 35.5341L99.498 35.4171ZM119.905 38.8244C112.144 47.0167 101.638 43.1197 99.498 35.4171L99.0765 35.5341C101.311 43.578 112.237 47.5543 120.223 39.1252L119.905 38.8244ZM120.283 42.9115V38.9748H119.845V42.9115H120.283ZM131.116 42.7179C129.507 43.5648 127.35 43.7494 125.282 43.6226C123.22 43.4963 121.281 43.0625 120.129 42.7027L119.999 43.1202C121.18 43.4894 123.155 43.9305 125.256 44.0592C127.351 44.1876 129.604 44.0077 131.319 43.105L131.116 42.7179ZM133.211 37.1089C133.521 37.693 133.791 38.6812 133.589 39.7261C133.389 40.7591 132.723 41.8718 131.116 42.7179L131.319 43.105C133.036 42.2015 133.792 40.9814 134.018 39.8092C134.243 38.6488 133.945 37.5594 133.598 36.9042L133.211 37.1089ZM130.124 37.2252H133.405V36.7878H130.124V37.2252ZM129.687 1.14088L129.905 37.0079L130.343 37.0052L130.124 1.13822L129.687 1.14088ZM119.845 34.8304V20.9519H119.408V34.8304H119.845ZM119.598 35.3398C119.758 35.2158 119.845 35.0261 119.845 34.8304H119.408C119.408 34.8977 119.378 34.9569 119.331 34.994L119.598 35.3398ZM109.831 35.1719C111.334 37.1181 113.27 37.5667 115.079 37.3206C116.876 37.0764 118.552 36.1499 119.598 35.3398L119.331 34.994C118.324 35.7737 116.718 36.6564 115.021 36.8872C113.337 37.1161 111.568 36.7055 110.177 34.9045L109.831 35.1719ZM113.215 20.3964C112.333 20.6905 111.452 21.4701 110.688 22.5149C109.921 23.5651 109.254 24.9066 108.81 26.3631C107.925 29.2674 107.91 32.687 109.831 35.1719L110.177 34.9045C108.379 32.578 108.364 29.3272 109.229 26.4906C109.66 25.0766 110.305 23.7801 111.041 22.773C111.781 21.7607 112.595 21.0641 113.353 20.8114L113.215 20.3964ZM119.327 20.3175C117.074 19.8869 114.366 20.1786 113.244 20.389L113.324 20.8189C114.421 20.6134 117.067 20.3311 119.245 20.7471L119.327 20.3175ZM119.845 20.9519C119.845 20.6484 119.635 20.3764 119.327 20.3175L119.245 20.7471C119.337 20.7647 119.408 20.848 119.408 20.9519H119.845Z" fill="currentColor"></path><path d="M146.051 33.7809C141.147 32.7161 138.675 35.7146 138.041 37.4056C137.384 39.1552 138.041 41.9984 139.134 42.8732C140.228 43.748 146.351 46.1537 149.194 41.3423C151.283 37.8079 148.86 35.2324 147.039 34.1576C146.733 33.9774 146.398 33.8561 146.051 33.7809Z" fill="#F4CF35"></path></svg></Link>
        </div>
        <div className='navul'>
          <ul type='none' className='navmainul'>
            <li className='navli'>Recipies
              <ul className='hiddenist' type="none">
                <li className='subcatli'> <Link to={"/recipe/Lunch Recipes"} className="linkttnav">Lunch Recipes</Link></li>
                <li className='subcatli'><Link to={"/recipe/Appetizers & Snack Recipes"} className="linkttnav">Appetizers & Snack Recipes</Link></li>
                <li className='subcatli'> <Link to={"/recipe/Dinner Recipes"} className="linkttnav"> Dinner Recipes </Link></li>
                <li className='subcatli'> <Link to={"/recipe/Dessert Recipes"} className="linkttnav"> Dessert Recipes </Link></li>
                <li className='subcatli'> <Link to={"/recipe/Drink & Cocktail Recipes "} className="linkttnav"> Drink & Cocktail Recipes </Link></li>
                <li className='subcatli'> <Link to={"/recipe/Side Dish Recipes"} className="linkttnav"> Side Dish Recipes</Link></li>
                <li className='subcatli'> <Link to={"/recipe/Grilling & BBQ Recipes"} className="linkttnav"> Grilling & BBQ Recipes </Link></li>
                <li className='subcatli'> <Link to={"/recipe/Microwave Recipes"} className="linkttnav"> Microwave Recipes </Link></li>
                <li className='subcatli'> <Link to={"/recipe/Quick & Easy Recipes"} className="linkttnav"></Link></li>
              </ul>
            </li>
            <li className='navli'>Popular
              <ul className='popularhiddenlist' type='none'>
                {
                  popularArr.map((item) => (
                    <li className='subcatli'><Link to={`/recipe/${item.title}`} className="linkttnav">{item.title}</Link></li>
                  ))
                }
              </ul>
            </li>
            <li className='navli'>Meat & Seafood
              <ul className='meathiddenlist' type='none'>
                {
                  meatArr.map((item) => (
                    <li className='subcatli'><Link to={`/recipe/${item.title}`} className="linkttnav">{item.title}</Link></li>
                  ))
                }
              </ul>
            </li>
            <li className='navli'>Healthy & Diet
              <ul className='healthhiddenlist' type='none'>
                {
                  healthyArr.map((item) => (
                    <li className='subcatli'><Link to={`/recipe/${item.title}`} className="linkttnav">{item.title}</Link></li>
                  ))
                }
              </ul>
            </li>
            <li className='navli'>Holdays
              <ul className='holidayhiddenlist' type='none'>
                {
                  holidaysArr.map((item) => (
                    <li className='subcatli'><Link to={`/recipe/${item.title}`} className="linkttnav">{item.title}</Link></li>
                  ))
                }
              </ul>
            </li>
            <li className='navli'>Cusisne
              <ul className='cusinehiddenlist' type='none'>
                {
                  cusineArr.map((item) => (
                    <li className='subcatli'><Link to={`/recipe/${item.title}`} className="linkttnav">{item.title}</Link></li>
                  ))
                }
              </ul>
            </li>
            <li className='navli'>Seosonal
              <ul className='seonalhiddenlist' type='none'>
                {
                  seosonalArr.map((item) => (
                    <li className='subcatli'><Link to={`/recipe/${item.title}`} className="linkttnav">{item.title}</Link></li>
                  ))
                }
              </ul>
            </li>
          </ul>
        </div>
        <div className='extranavdiv'>
          <ul className='extranavlist' type="none">
            <li className='profileli'><button className='profilebtn'><Link to={"/searchpage"} className='linkttnav'><FaSearch /></Link></button></li>
            {showMorePro ? <li className='profileli'><button className='profilebtn'><Link to={"/saved"} className='linkttnav'><FaBookmark /></Link></button></li> : null}
            <li className='profileli'><button onClick={changeLoggedIn} className='profilebtn'><FaUser /></button>
              {showMorePro ? <ul className='accountlist' type="none">
                <li className="linkttnav"><button className='profilebtn'><Link to={"/profile"} className="linkttnav">Profile</Link></button></li>
                <li className="linkttnav"><button className='profilebtn'><Link to={"/addrecipe"} className="linkttnav">Add Recipe</Link></button></li>
                <li className="linkttnav"><button className='profilebtn' onClick={logoutFunction}>Log Out</button></li>
              </ul> : null}
            </li>
          </ul>
        </div>
      </div>
      {
        loggedIn ? null : <div className='blurdiv'>
          {login ? <div>
            <div className='mainlogindiv'>
              < div className='closelogin' >
                <button className='closebtn' onClick={changeLoggedIn}>X</button>
              </div >
              <div>
                <p className='logintitle'>Login</p>
              </div>
              <div>
                <label className='loginlabel'>email</label>
                <input type="email" placeholder='your@email.com' className='logininput' onChange={(e) => setEmail(e.target.value)} />
                <label className='loginlabel'>password</label>
                <input type="password" placeholder='password' className='logininput' onChange={(e) => setPassword(e.target.value)} />
                <button className='loginsubmit' onClick={loginFunction}>Submit</button>
                <p className='loginforgot'>Forgot Password</p>
                <p className='donthave'>Don't Have Account Yet <button className='loginsignup' onClick={changeLogin}>Signup</button></p>
              </div>
            </div>
          </div> :
            <div>
              <div className='mainlogindiv'>
                < div className='closelogin' >
                  <button className='closebtn' onChange={(e) => setEmail(e.target.value)} onClick={changeLoggedIn}>X</button>
                </div >
                <div>
                  <p className='logintitle'>Create An Account</p>
                  <p className='signupdes'>Save recipes across devices, write reviews, and share your own photos</p>
                </div>
                <div>
                  <label className='loginlabel'>Email</label>
                  <input type="email" placeholder='your@email.com' className='logininput' onChange={(e) => setEmail(e.target.value)} />
                  <label className='loginlabel'>password</label>
                  <input type="password" placeholder='password' className='logininput' onChange={(e) => setPassword(e.target.value)} />
                  <button className='loginsubmit' onClick={signUpFunction}>Create Account</button>
                  <p className='alreadyp'>Already Member ? <button className='loginsignup' onClick={changeLogin}>Log In</button></p>
                </div>
              </div>
            </div>
          }
        </div>
      }
      <div className='anothernavdiv' style={{ display: visible }}>
        <ul type='none' className='navmainul'>
          <li className='navli'>Recipies
            <ul className='hiddenist' type="none">
              <li className='subcatli'> <Link to={"/recipe/Lunch Recipes"} className="linkttnav">Lunch Recipes</Link></li>
              <li className='subcatli'><Link to={"/recipe/Appetizers & Snack Recipes"} className="linkttnav">Appetizers & Snack Recipes</Link></li>
              <li className='subcatli'> <Link to={"/recipe/Dinner Recipes"} className="linkttnav"> Dinner Recipes </Link></li>
              <li className='subcatli'> <Link to={"/recipe/Dessert Recipes"} className="linkttnav"> Dessert Recipes </Link></li>
              <li className='subcatli'> <Link to={"/recipe/Drink & Cocktail Recipes "} className="linkttnav"> Drink & Cocktail Recipes </Link></li>
              <li className='subcatli'> <Link to={"/recipe/Side Dish Recipes"} className="linkttnav"> Side Dish Recipes</Link></li>
              <li className='subcatli'> <Link to={"/recipe/Grilling & BBQ Recipes"} className="linkttnav"> Grilling & BBQ Recipes </Link></li>
              <li className='subcatli'> <Link to={"/recipe/Microwave Recipes"} className="linkttnav"> Microwave Recipes </Link></li>
              <li className='subcatli'> <Link to={"/recipe/Quick & Easy Recipes"} className="linkttnav"></Link></li>
            </ul>
          </li>
          <li className='navli'>Popular
            <ul className='popularhiddenlist' type='none'>
              {
                popularArr.map((item) => (
                  <li className='subcatli'><Link to={`/recipe/${item.title}`} className="linkttnav">{item.title}</Link></li>
                ))
              }
            </ul>
          </li>
          <li className='navli'>Meat & Seafood
            <ul className='meathiddenlist' type='none'>
              {
                meatArr.map((item) => (
                  <li className='subcatli'><Link to={`/recipe/${item.title}`} className="linkttnav">{item.title}</Link></li>
                ))
              }
            </ul>
          </li>
          <li className='navli'>Healthy & Diet
            <ul className='healthhiddenlist' type='none'>
              {
                healthyArr.map((item) => (
                  <li className='subcatli'><Link to={`/recipe/${item.title}`} className="linkttnav">{item.title}</Link></li>
                ))
              }
            </ul>
          </li>
          <li className='navli'>Holdays
            <ul className='holidayhiddenlist' type='none'>
              {
                holidaysArr.map((item) => (
                  <li className='subcatli'><Link to={`/recipe/${item.title}`} className="linkttnav">{item.title}</Link></li>
                ))
              }
            </ul>
          </li>
          <li className='navli'>Cusisne
            <ul className='cusinehiddenlist' type='none'>
              {
                cusineArr.map((item) => (
                  <li className='subcatli'><Link to={`/recipe/${item.title}`} className="linkttnav">{item.title}</Link></li>
                ))
              }
            </ul>
          </li>
          <li className='navli'>Seosonal
            <ul className='seonalhiddenlist' type='none'>
              {
                seosonalArr.map((item) => (
                  <li className='subcatli'><Link to={`/recipe/${item.title}`} className="linkttnav">{item.title}</Link></li>
                ))
              }
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav