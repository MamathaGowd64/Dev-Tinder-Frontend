import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';


const Login = () => {
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isLogin, setIsLogin]=useState(false)
    const [error,setError]=useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
       
        try {
            const res=await axios.post(BASE_URL + "/login", {
                emailId: emailId,
                password: password,
            }, { withCredentials: true }
            );

            dispatch(addUser(res.data));
            return navigate("/feed");
        }
        catch (err) {
            console.log(err.response);
            setError(err?.response?.data || "something went wrong!!");
        }
        
    }


    const handleSignup = async () => {
        try {
            const res = await axios.post(BASE_URL + "/signup",
                { firstName, lastName, emailId, password },
                { withCredentials: true },
            );
            dispatch(addUser(res?.data));
            return navigate("/profile")
        }
        catch (err) {
            console.log(err?.mesage)
        }
    }
  return (
    <div className='flex justify-center my-10'>
                    <div className="card bg-base-300 w-96 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title justify-center">{isLogin ? "Login":"Sign Up" }</h2>
                  <div>
                      
                      {
                          !isLogin && <>
                              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                              <span className="label-text">First Name:</span> 
                </div>
                         <input type="text"
                              value={firstName}
                              placeholder="Type here"
                              className="input input-bordered w-full max-w-xs"
                              onChange={
                                  (e) => setFirstName(e.target.value)
                            
                              }
                          /> 
                      </label>  
                      
                      <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                              <span className="label-text">Last Name:</span> 
                </div>
                         <input type="text"
                              value={lastName}
                              placeholder="Type here"
                              className="input input-bordered w-full max-w-xs"
                              onChange={
                                  (e) => setLastName(e.target.value)
                            
                              }
                          /> 
                </label>  
                          </>
                  }


                            <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                              <span className="label-text">Email Id:</span> 
                </div>
                         <input type="text"
                              value={emailId}
                              placeholder="Type here"
                              className="input input-bordered w-full max-w-xs"
                              onChange={
                                  (e) => setEmailId(e.target.value)
                            
                              }
                          /> 
                </label>  
                <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                <span className="label-text">Password</span>

                </div>
                          <input
                              value={password}
                              type="text"
                              placeholder="Type here"
                              className="input input-bordered w-full max-w-xs"
                              onChange={(e)=>setPassword(e.target.value)}
                          />

                </label>  
                  </div>
                  <p className='text-red-500'>
                       {error}
                  </p>
                <div className="card-actions justify-center">
                      <button className="btn btn-primary" onClick={isLogin?handleLogin :handleSignup}>{ isLogin ? "Login":"Sign Up"}</button>
                  </div>
                  <p className='m-auto cursor-pointer' onClick={()=>setIsLogin((value)=>!value)}>{isLogin?"New User? Signup Here" : "Existing User? Login Here" }</p>
                </div>
                </div>
                </div>
  )
}

export default Login
