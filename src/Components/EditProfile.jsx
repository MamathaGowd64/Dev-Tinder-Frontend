import { useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import Usercard from "./Usercard";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({user}) => {
    //console.log(user)
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [photoURL, setPhotoURL] = useState(user.photoURL);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const [about, setAbout] = useState(user.about);
    const [skills, setSkills] = useState(user.skills);
    const [error, setError] = useState("")
    const [toast, setToast] = useState(false);
    
    const dispatch = useDispatch();


    const handleSaveProfile = async () => {
        try {
            
            const res = await axios.patch(BASE_URL + "/profile/edit", 
               {
                   firstName,lastName,photoURL,age,gender,about,skills,
                }, { withCredentials: true }) 
                console.log(res.data);
            dispatch(addUser(res?.data));
            setToast(true);
            setTimeout(()=> {
                 setToast(false)
            },3000)
        }
        catch (err) {
            setError(err.message)
        }
    }


  return (
      <>
          <div className="flex justify-center my-20">
          <div className='flex justify-center mx-10'>
                    <div className="card bg-base-300 w-72 shadow-xl">
                <div className="card-body">
                <h2 className="card-title justify-center">Edit Profile</h2>
                            <div>
                            <label className="form-control w-full max-w-xs my-1">
                <div className="label flex">
                              <span className="label-text">First Name</span> 
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
                <label className="form-control w-full max-w-xs my-1">
                <div className="label">
                <span className="label-text">LastName</span>

                </div>
                          <input
                              value={lastName}
                              type="text"
                              placeholder="Type here"
                              className="input input-bordered w-full max-w-xs"
                              onChange={(e)=>setLastName(e.target.value)}
                          />

                      </label>  
                      
                      <label className="form-control w-full max-w-xs">
                <div className="label">
                              <span className="label-text">PhotoURL</span> 
                </div>
                         <input type="text"
                              value={photoURL}
                              placeholder="Type here"
                              className="input input-bordered w-full max-w-xs"
                              onChange={
                                  (e) => setPhotoURL(e.target.value)
                            
                              }
                          /> 
                      </label>  
                      <label className="form-control w-full max-w-xs">
                <div className="label">
                              <span className="label-text">Age</span> 
                </div>
                         <input type="text"
                              value={age}
                              placeholder="Type here"
                              className="input input-bordered w-full max-w-xs"
                              onChange={
                                  (e) => setAge(e.target.value)
                            
                              }
                          /> 
                </label>     

                <label className="form-control w-full max-w-xs">
                <div className="label">
                              <span className="label-text">Gender</span> 
                </div>
                         <input type="text"
                              value={gender}
                              placeholder="Type here"
                              className="input input-bordered w-full max-w-xs"
                              onChange={
                                  (e) => setGender(e.target.value)
                            
                              }
                          /> 
                      </label>  
                      
                      <label className="form-control w-full max-w-xs my-1">
                <div className="label">
                              <span className="label-text">About</span> 
                </div>
                         <input type="text"
                              value={about}
                              placeholder="Type here"
                              className="input input-bordered w-full max-w-xs"
                              onChange={
                                  (e) => setAbout(e.target.value)
                            
                              }
                          /> 
                </label>  

                  </div>
                  <p className='text-red-500'>
                       {error}
                  </p>
                <div className="card-actions justify-center">
                <button className="btn btn-primary" onClick={handleSaveProfile}>Save Profile</button>
                </div>
                </div>
                </div>
    </div>
          <Usercard user={{ firstName, lastName,photoURL,age,gender,about,skills}} />
          </div>
          {toast && (
              <div className="toast toast-top toast-center">
  
              <div className="alert alert-success">
                <span>Profile saved successfully.</span>
              </div>
            </div>
          )}
      </>
  )
}

export default EditProfile
