import React, { useEffect } from 'react'
import axios from 'axios'
import NavBar from "./NavBar"
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'


const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 const userData = useSelector(store => store?.user);
  const fetchUser = async() => {
    try {
      if (userData) {
        return;
      }
      const user = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      })
      dispatch(addUser(user.data))
    } catch (err) {
      if(err.status === 401)
      {
        navigate("/login");
      }
      console.log(err.message)
    }
  }

  useEffect(() => {
    fetchUser();
  }, [])
  

  return (
    <div>
          <NavBar />
          <Outlet />
          <Footer/>
    </div>
  )
}

export default Body
