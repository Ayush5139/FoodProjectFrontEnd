import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Nav from './Nav'
import './mainreview.css'

function MainReview() {
    const data = useParams().reviewid
    const [review, setReview] = useState([])
    const [loggedIn, setLogedIn] = useState(true)
    const userid = sessionStorage.getItem("userid")
    useEffect(() => {
        axios.get(`https://food-backend-gub7.onrender.com/getonreview/${data}`)
            .then((res) => setReview(res.data))
        if (sessionStorage.getItem("userid") == " " || sessionStorage.getItem("userid") == null) {
            setLogedIn(false)
        }
    }, [data,userid,loggedIn])
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const [reply, setUserReply] = useState("")
    console.log("kookoo", userid)
    console.log("dataaatta", data)

    function postReply() {
        const newObj = {
            currentUserID: userid,
            currentReviewID: data,
            currentReply: reply
        }
        axios.post("https://food-backend-gub7.onrender.com/postreplies", { data: newObj })
            .then((res) => console.log(res))
        setUserReply(" ")
    }

    const [replies, setReplies] = useState([])
    useEffect(() => {
        axios.get(`https://food-backend-gub7.onrender.com/getreplies/${data}`)
            .then((res) => setReplies(res.data))
    }, [reply, data])
    return (
        <div>
            <Nav />
            {
                review.map((item) => (
                    <div className='mainreviewmainreview'>
                        <div style={{ display: "flex", minHeight: "30%" }}>
                            <img src='https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=' className='minireviewmapimg' />
                            <h3 className='minireviewmaptitle'>{item.UserName} reviewed <Link to={`item/${item.RecipeId}`} className='reviewrecipelink'><span className='linkspan'>{item.RecipeName}</span></Link></h3>
                        </div>
                        <p className='mainreviewmaprating'>{getRndInteger(2, 5)}<a className='starrating'>&#9733;</a></p>
                        <p className='mainreviewmapdes'>{item.Review}</p>
                        <div className='minireviewmapmini'>
                            <p className='minireviewmaptime'>{getRndInteger(1, 10)} Hours Ago</p>
                        </div>
                    </div>
                ))
            }
            {loggedIn ?
                <div className='mainreviewquestionsinputdiv'>
                    <img src='https://img-nonprod.sndimg.com/food/image/upload/w_45,h_45,q_100,c_thumb/v1/qa1/fdc/img/placeholder/avatar.jpg' className='quesimg' />
                    <input type="text" placeholder='Write A Reply' className='quesinp' onChange={(e) => setUserReply(e.target.value)} />
                    <button className='quesbtn' onClick={postReply}>Reply</button>
                </div> : null
            }
            {replies.map((item) => (
                <div className='mainreviewrevirediv'>
                    <p className='main-reviewimg'><img src='https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/UlIqmHJn-SK.gif' className='mainreviewreviewuserimg' /><p className='main-authorp'>{item.name}</p></p>
                    <p className='main-reviewp'>{item.reply}</p>
                    <div className='subreviewdiv'>
                        <p className='authorp'>{getRndInteger(1, 10)} Minutes Ago</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MainReview