
import { useState } from 'react';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
function App() {
  const [login, setLogin] = useState(0);
  const Onlogin = () =>{
    setLogin(0);
  }
  const OnSignup = () =>{
    setLogin(1);
  }
  return (
    <div className='main_div'>
    <button onClick={Onlogin}>Login</button>
    <button onClick={OnSignup}>Signup</button>
     {/* <Signup/> */}
      
     {
      login?<Signup/>:<Login/>
     }
    </div>
  );
}

export default App;
