import React, { useState } from 'react';

function Formv() {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
      e.preventDefault()

      const {name, email} = user;

      if(name && email){
        const res = await fetch("https://auth-development-7e0b5-default-rtdb.firebaseio.com/authDevelopment.json", {
          method: "POST",
          headers: {
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            name,
            email,
          })
        });
        console.log("First API")
        if(res){
          setUser({
            name: '',
            email: '',
          });
          alert("Data stored successfully")
        }
      }
      else{
        console.log("in else part")
         alert("data is not submitted")
      }

      // const res = await fetch("https://auth-development-7e0b5-default-rtdb.firebaseio.com/authDevelopment.json", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type":"application/jason",
      //   },
      //   body:JSON.stringify({
      //     name,
      //     email,
      //   })
      // });

      // if(res){
      //   setUser({
      //     name: '',
      //     email: '',
      //   });
      //   alert("Data stored successfully")
      // }
  }
  return (
    <div>
      <form method='POST'>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={user.name}
          onChange={getUserData}
          autoComplete="off"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={user.email}
          onChange={getUserData}
          autoComplete="off"
          required
        />
        <button onClick={postData}>Submit</button>
      </form>
    </div>
  );
}

export default Formv;
