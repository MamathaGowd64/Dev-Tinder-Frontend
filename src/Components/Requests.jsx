//import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../utils/constants';
import { addRequests,removeRequest } from '../utils/requestSlice'
import { useEffect } from 'react';

const Requests = () => {
    const dispatch = useDispatch();
    const requests = useSelector((store) => store?.requests)
    
    const reviewRequest = async(status,_id) => {
        try{
            await axios.post(BASE_URL + "/request/review/" + status + "/" + _id,
                {}, { withCredentials: true }
            );
            dispatch(removeRequest(_id));
        }
        catch (err) {
            console.log(err?.message)
        }
    }
       
    const fetchRequests = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/requests/received",{
                withCredentials:true,
            })
            console.log(res?.data)
            dispatch(addRequests(res?.data?.data));
        }
        catch (err) {
            console.log(err?.message)
           
        }
    }

    useEffect(() => {
        fetchRequests();
    }, []);
    console.log(requests)
    if (!requests) return;
    if(requests.length ===0) return <h1 className='flex justify-center text-bold text-2xl'>No Requests Found</h1>

    return (
        <div className='text-center my-10'>
              <h1 className='text-bold text-center text-black text-3xl'>Requests</h1>
              
              {
                  requests.map((request) => {
                      const { firstName, lastName, photoURL, age, gender, about } = request.fromUserId;
                      return (
                          <div key={request._id} className='flex m-4 p-4 w-96 mx-auto rounded-lg bg-base-300'>
                              <div>
                                  <img alt="photo" className='w-20 h-20 rounded-full' src={photoURL} />
                              </div>
                              <div className='text-left mx-4'>
                                  <h2 className='font-bold text-xl'>{firstName + " " + lastName}</h2>
                                  {age && gender && < h1 > {age + ","+ gender}</h1>}
                                  <p>{about}</p>
                                  </div>
                              
                              <button
                                  className="btn btn-active btn-primary mx-2 my-2"
                                  onClick={() => reviewRequest("rejected", request._id)}>
                                  Reject</button>
                              <button
                                  className="btn btn-active btn-secondary mx-2 my-2"
                                  onClick={() => reviewRequest("accepted", request._id)}>
                              Accept</button>
                         </div>
                              
                              
                      )
                  })
              }
              </div>

      )
}

export default Requests





