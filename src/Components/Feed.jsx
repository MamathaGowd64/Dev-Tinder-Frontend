import React, { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import Usercard from './Usercard'

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector(store => store?.feed);
  
  console.log(feed)
  const getFeed = async () => {
    // if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      })
      dispatch(addFeed(res?.data?.data));
    }
    catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getFeed();
  }, [])

  if (!feed) return;
  if(feed.length<=0) return <h1 className='flex justify-center text-bold text-2xl'>No Requests Found</h1>
  
  return (
    feed && (
      <div className='flex justify-center'>
        <Usercard user={feed[0]} />   
      </div>
  ))
}

export default Feed
