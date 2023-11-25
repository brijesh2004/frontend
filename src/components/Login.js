import React from 'react';
import { useState } from 'react';
import Forget from './Forget';

const Signup = () => {
  const [emailoruser , setEmailoruser] = useState("");
  const [password , setPassword] = useState("");
  const [forget , setForget] = useState(1);
  const [login , setLogin] = useState("Login");
 
  
  
   const onSubmit = async (e) =>{
    if(emailoruser.length===0 ||password.length===0){
       alert("please fill all the filed");
       return;
    }
     e.preventDefault();
     setLogin("Loging...");
     const res = await fetch('https://taskbackend-3boa.onrender.com/login',{
        method:'POST',
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          emailoruser , password
        })
     })

     const data = await res.json();
     setLogin("Loging");
      if(res.status===501|| !data){
        alert("User Not found")
      }
      else if(res.status===502){
        alert("Wrong credentials")
      }
      else{
        alert("login Successfull");
        setEmailoruser("");
        setPassword("");
      }

   }
  return (
    <div>
   {  forget ? <div> <h1>Login</h1>
      <input
        type="text"
        name="emailoruser"
        value={emailoruser}
        placeholder='Email or username'
        onChange={(e)=>setEmailoruser(e.target.value)}
      />   <br /><br />
      <input
        type="password"
        name="password"
        value={password}
        placeholder='Create password'
        onChange={(e)=>setPassword(e.target.value)}
      /> <br /><br />

      <button onClick={onSubmit}>{login}</button>
  <br />
    <p>--OR--</p>
      <button onClick={()=>setForget(0)}>Forget Password</button> </div>:<Forget/>}
    </div>
  );
};

export default Signup;
