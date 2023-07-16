import React, { useState } from 'react'
import './login.css'
import axios from 'axios'

function Login() {
    const [login, setLogin] = useState(true)
    function changeLogin(){
        setLogin(!login)
    }
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    console.log(email)
    console.log(password)
    function loginFunction(){
        const newObj={
            email:email,
            password:password
        }
        axios.post("https://food-backend-gub7.onrender.com/login",{data:newObj})
        .then((res)=>console.log(res))
    }
    function signUpFunction(){
        const newObj={
            email:email,
            password:password
        }
        axios.post("https://food-backend-gub7.onrender.com/signup",{data:newObj})
        .then((res)=>console.log(res))
    }

    return (
        <div>
            {login ? <div>
                <div className='mainlogindiv'>
                    < div className='closelogin' >
                        <button className='closebtn'>X</button>
                    </div >
                    <div>
                        <p className='logintitle'>Login</p>
                    </div>
                    <div>
                        <label className='loginlabel'>email</label>
                        <input type="email" placeholder='your@email.com' className='logininput' onChange={(e)=>setEmail(e.target.value)}/>
                        <label className='loginlabel'>password</label>
                        <input type="password" placeholder='password' className='logininput' onChange={(e)=>setPassword(e.target.value)}/>
                        <button className='loginsubmit' onClick={loginFunction}>Submit</button>
                        <p className='loginforgot'>Forgot Password</p>
                        <p className='donthave'>Don't Have Account Yet <button className='loginsignup' onClick={changeLogin}>Signup</button></p>
                    </div>
                </div>
            </div> :
                <div>
                    <div className='mainlogindiv'>
                        < div className='closelogin' >
                            <button className='closebtn'>X</button>
                        </div >
                        <div>
                            <p className='logintitle'>Create An Account</p>
                            <p className='signupdes'>Save recipes across devices, write reviews, and share your own photos</p>
                        </div>
                        <div>
                            <label className='loginlabel'>Email</label>
                            <input type="email" placeholder='your@email.com' className='logininput' onChange={(e)=>setEmail(e.target.value)}/>
                            <label className='loginlabel'>password</label>
                            <input type="password" placeholder='password' className='logininput' onChange={(e)=>setPassword(e.target.value)} />
                            <button className='loginsubmit' onClick={signUpFunction}>Create Account</button>
                            <p className='alreadyp'>Already Member ? <button className='loginsignup'onClick={changeLogin}>Log In</button></p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Login

