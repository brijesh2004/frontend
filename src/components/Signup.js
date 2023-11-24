import React from 'react';
import { useState } from 'react';

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: ""
  });

  const onSubmit = async (e) =>{
    e.preventDefault();
    if ((user.username).length === 0 || (user.email).length === 0 || (user.password).length === 0 || (user.cpassword).length === 0) {
        alert("please fill all the filed");
        return;
    }
    
    if(user.password!==user.cpassword){
        alert("password are not matching ");
        return;
    }
    const res = await fetch('http://localhost:8000/signup',{
       method:'POST',
       headers:{
         "Content-Type" : "application/json"
       },
       body: JSON.stringify({
         user
       })
    })

     if(res.status===409){
       alert("User Already exist");
     }
     else{
       alert("Registration Successfull");
    //    setEmailoruser("");
    //    setPassword("");
     }

  }


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  return (
    <div>
    <h1>Signup</h1>
      <input
        type="text"
        name="username"
        value={user.username}
        placeholder='Create username'
        onChange={handleInputChange}
      />   <br /><br />
      <input
        type="email"
        name="email"
        value={user.email}
        placeholder='Enter the email'
        onChange={handleInputChange}
      /> <br /><br />
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder='Create password'
        onChange={handleInputChange}
      /> <br /><br />
      <input
        type="password"
        name="cpassword"
        value={user.cpassword}
        placeholder='Re-Enter the password'
        onChange={handleInputChange}
      /> <br /><br />

      <button onClick={onSubmit}>Signup</button>
    </div>
  );
};

export default Signup;
