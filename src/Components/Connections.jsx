import  { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { addConnections } from '../utils/connectionSlice'
import { useDispatch, useSelector } from 'react-redux'

const Connections = () => {
    const dispatch = useDispatch();
    const connections = useSelector(store => store?.connections)
    //console.log(connections)

    const fetchConnections = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/connections", {
                withCredentials:true
            })
            console.log(res?.data?.data);
            dispatch(addConnections(res?.data?.data))
        }
        catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        fetchConnections();
    }, [])
    
    if (!connections) return;

    if(connections.length===0) return <h1 className='flex justify-center text-bold text-2xl'>No Requests Found</h1>

  return (connections && (
    <div className='text-center my-10'>
          <h1 className='text-bold text-center text-black text-3xl'>Connections</h1>
          
          {
              connections.map((connection) => {
                  const { firstName, lastName, photoURL, age, gender, about } = connection;
                  return (
                      <div key={connection._id} className='flex m-4 p-4 w-96 mx-auto rounded-lg bg-base-300'>
                          <div>
                              <img alt="photo" className='w-20 h-20 rounded-full' src={photoURL} />
                          </div>
                          <div className='text-left mx-4'>
                              <h2 className='font-bold text-xl'>{firstName + " " + lastName}</h2>
                              {age && gender && < h1 > {age + ","+ gender}</h1>}
                              <p>{about}</p>
                              </div>
                          
                          </div>
                  )
              })
          }
          </div>
  ))
}

export default Connections
