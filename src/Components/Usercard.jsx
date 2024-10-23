

const Usercard = (user) => {
    const { firstName, lastName, skills, age, photoURL, about, gender} = user.user;
    console.log(firstName)
  return (
    <div className="card bg-base-300 w-72 shadow-xl">
  <figure>
    <img
      src={photoURL}
      alt="photo" />
  </figure>
  <div className="card-body">
              <h2 className="card-title">{firstName + " " + lastName}</h2>
              {age && gender && <p>{ age + " " + gender}</p>}
              <p>{about}</p>
              <div className="card-actions justify-center my-4">
              <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-secondary">Send Request</button>
    </div>
  </div>
</div>
  )
}

export default Usercard
