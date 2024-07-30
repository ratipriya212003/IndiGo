import React, { useState } from "react";
import "../styles/Login.css";
import {useNavigate} from "react-router-dom";

function Login() {
  const [currState,setCurrState]=useState('Login');
 const [name,setName]=useState('');
 const [email,setEmail]=useState('');
 const [password,setPassword]=useState('');

const navigate=useNavigate();

  const login=async(e)=>{
    e.preventDefault();
console.log("email.password",email,password)
let result=await fetch('http://localhost:5000/login',{
  method:"POST",
  body:JSON.stringify({email,password}),
  headers:{
    'Content-Type':'application/json'
  }
});
result=await result.json();
console.log(result);
if(result.success){
  navigate('./search');
}
  }


   const signup=async(e)=>{
    e.preventDefault();
console.log("signup executed",name,email,password);
let result=await fetch('http://localhost:5000/signup',{
  method:"POST",
  headers:{
    'Content-Type':'application/json',
  },
  body:JSON.stringify(
    {
      name,email,password
    }
  )});
  result= await result.json();
  console.log(result);
  localStorage.setItem("user",JSON.stringify(result))
  if(result.success){
    navigate('/search');
  }
   }

  return (
    <div className="cont">
      <form className="login-container" onSubmit={currState==='Login'?login:signup}>
        <div className="login_input">
          <h2>{currState}</h2>
        </div>
        {currState === "Sign In" && (
          <div className="input-box">
            <i className="bx bxs-user"></i>
            <input
              name="username"
              type="text"
              value={name} onChange={(e)=>{setName(e.target.value)}}
              placeholder="Your Name"
              className="inputSession"
              required
            />
          </div>
        )}
        <div className='input-box'>
                    <i className='bx bxs-user-account'></i>
                    <input name='email'  type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Your Email' className='inputSession' required/>
                </div>
                
                <div className='input-box'>
                    <i className='bx bxs-lock-alt'></i>
                    <input name='password'  type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Your Password' className='inputSession' required/>
                </div>
                <div className='login-condition'>
                    <input type='checkbox' required/>
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                    {currState==="Login" ? 
                        <p>Create a new Account? <span onClick={() => setCurrState("Sign In")}>Click Here</span></p> 
                        : 
                        <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login Here</span></p>
                    }
                </div>
                <button className="btn" >
                    {currState==="Login" ? "Login" : "Create Account"}
                </button>
      </form>
    </div>
  );
}

export default Login;