import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './log.css'
function Singup() {
   const [credentials,setcredentials]=useState({name:'',email:'',location:'',password:''});
const changing=(event)=>{
 setcredentials({...credentials,[event.target.name]:event.target.value});
}

    const submithandler=async(event)=>{
   event.preventDefault();

   const response=await fetch("http://localhost:4000/createuser",{
method:"POST",
headers:{
    'Content-Type':'application/json',
},
body:JSON.stringify({name:credentials.name,email:credentials.email,location:credentials.location,password:credentials.password,})
   });

   const json=await response.json();
   console.log(json);

   if(!json.success)
   {
    alert('enter valid credentials');
   }
   alert('now Login in email');
      
    }
  return (
   <>
   <div className="cont sighnupform">
   <form onSubmit={submithandler}>
   <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control"  placeholder="Enter name" name="name" value={credentials.name} onChange={changing} />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control"  onChange={changing} aria-describedby="emailHelp" placeholder="Enter email" name="email" value={credentials.email} />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control"placeholder="Password" name="password" value={credentials.password} onChange={changing} />
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Address</label>
    <input type="text" className="form-control"placeholder="address" name="location" value={credentials.location} onChange={changing} />
  </div>
 
  <button type="submit" className=" m-3 btn btn-success">Submit</button>
  <Link to='/login' className=" m-3 btn btn-danger" >Already have account?</Link>
</form>
</div>
   
   
   
   </>
  )
}

export default Singup
