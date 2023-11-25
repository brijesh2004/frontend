import React, { useState } from 'react'

const Forget = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [forget , setForget] = useState("Reset");

    const onSubmit =async (e) =>{
        e.preventDefault();
        if(email.length===0||password.length===0){
            alert("please fill all the filed");
            return;
        }
        setForget("Resetting...");
        const res = await fetch("https://taskbackend-3boa.onrender.com/forgetpassword" , {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
              },
              body: JSON.stringify({
                email , password
              })
        })
        const data = await res.json();
        setForget("Reset");
        if(res.status===501){
            alert("User not exist");
        }
        else if(res.status===500|| !data){
            alert("error");
        }
        else{
            alert("reset successfull")
        }
    }
  return (
    <div>
      <h1>Forget Password</h1>
      <input type="email"
       name='email'
       value={email}
       onChange={(e)=>setEmail(e.target.value)}
       placeholder='enter email' /> <br /><br />
      <input type="password"
      name='password' 
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
       placeholder='create new password'/> <br /><br />
      <button onClick={onSubmit}>{forget}</button>
    </div>
  )
}

export default Forget
