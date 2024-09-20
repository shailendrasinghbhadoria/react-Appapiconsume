import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {checkValidData} from './validate'

const Login = () => { 
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState(null)
const navigate = useNavigate()

useEffect(()=>{
    if(localStorage.getItem('token')){
        navigate('/home')
    }
},[])


const handleAuth = ()=>{

    const err = checkValidData(email, password);
    setError(err)        
    if(email==="user@mail.com" && password==="Test@1234"){
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')
        if(localStorage.getItem('token')){
            navigate("/home")            
        }      

    }else{       
        setEmail(""); 
        setPassword("");
    }
}



  return (
    <div>
      <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div class="max-w-md mx-auto">
              <div>
                <h1 class="text-2xl font-semibold">Login</h1>
              </div>
              <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div class="relative">
                    <input
                      autocomplete="on"
                      id="email"
                      name="email"
                      type="text"
                      class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 rounded-lg p-3"
                      placeholder="Email address"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}  
                    />
                    <label
                      for="email"
                      class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div class="relative">
                    <input
                      autocomplete="on"
                      id="password"
                      name="password"
                      type="password"
                      class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 rounded-lg p-3"
                      placeholder="Password"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                    <label
                      for="password"
                      class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div class="relative">
                    <button class="bg-cyan-500 text-white rounded-md px-2 py-1" onClick={handleAuth}>
                      Submit
                    </button>
                  </div>
                  <p className="text-red-500 text-sm">{error}</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
