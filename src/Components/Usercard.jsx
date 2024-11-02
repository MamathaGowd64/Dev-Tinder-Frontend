import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { removeFeed } from "../utils/feedSlice";
import { useDispatch } from "react-redux";


const Usercard = ({user}) => {
  const { _id,firstName, lastName, age, skills, photoURL, about, gender } = user;
  const dispatch = useDispatch();
  //console.log(firstName);

  const handleSendRequest = async (status,_id) => {
    try {
      await axios.post(BASE_URL + "/request/send/" + status + "/" + _id,
        {},{withCredentials:true}
      )
      dispatch(removeFeed(_id))
    }
    catch (err) {
      console.log(err?.message)
    }
  }


  return (
    <div className="card bg-base-300 w-72 shadow-xl my-20">
  <figure>
    <img
      src={photoURL}
      alt="photo" />
  </figure>
  <div className="card-body">
              <h2 className="card-title">{firstName + " " + lastName}</h2>
              {age && gender && <p>{ age + "," + gender}</p>}
              <p>{about}</p>
              <div className="card-actions justify-center my-4">
              <button className="btn btn-primary" onClick={()=>handleSendRequest("ignored",_id)}>Ignore</button>
      <button className="btn btn-secondary" onClick={()=>handleSendRequest("interested",_id)}>Send Request</button>
    </div>
  </div>
</div>
  )
}

export default Usercard
