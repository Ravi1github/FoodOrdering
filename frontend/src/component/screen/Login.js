import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import './log.css';
function Login() {

  const [credentials,setcredentials]=useState({email:'',password:''});
  const navigate=useNavigate();
  const changing=(event)=>{
   setcredentials({...credentials,[event.target.name]:event.target.value});
  }
  
      const submithandler=async(event)=>{
     event.preventDefault();
  
     const response=await fetch("http://localhost:4000/loginuser",{
  method:"POST",
  headers:{
      'Content-Type':'application/json',
  },
  body:JSON.stringify({email:credentials.email,password:credentials.password,})
     });
  
     const json=await response.json();
     console.log(json);
  
     if(!json.success)
     {
      alert(' please enter  valid credentials');
     }
     if(json.success)
     {
      //storing email for order purpose
      localStorage.setItem("userEmail",credentials.email);
      //saving token on localstorage
      localStorage.setItem("authtoken",json.authtoken);
     navigate('/');
     }
  
      }

  
 
 
  return (
    <>
   
    <div className='cont loginform'>
    <form onSubmit={submithandler}>
   
   <div className="form-group ">
     <label htmlFor="exampleInputEmail1">Email address</label>
     <input type="email" className="form-control"  onChange={changing} aria-describedby="emailHelp" placeholder="Enter email" name="email" value={credentials.email} />
   </div>
   <div className="form-group">
     <label htmlFor="exampleInputPassword1">Password</label>
     <input type="password" className="form-control"placeholder="Password" name="password" value={credentials.password} onChange={changing} />
   </div>
 
  
  
   <button type="submit" className=" m-3 btn btn-success">Submit</button>
   <Link to='/signup' className=" m-3 btn btn-danger" >New User?</Link>
 </form>
 </div>
    
    
    
    </>
  )
}

export default Login
