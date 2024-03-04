import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Modal from './screen/Model';
import { useCart } from './screen/Contextreducer';
import Cart from './screen/Cart';





function Navbar() {
  let data=useCart();
const [cartview,setcartview]=useState(false);

  const auth =localStorage.getItem("authtoken");
  const navigate=useNavigate();
const logouthandler=()=>{
  localStorage.removeItem("authtoken");
  navigate("/login");
}

  return (
    <>
   
    <nav className="navbar navbar-expand-lg   navbar bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand  fst-italic btn btn-success text-light" to="/" style={{fontSize:'2rem',}}>GO-FOOD</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item">
          <Link className="nav-link  text-light " aria-current="page" to="/" style={{fontSize:'1.2rem',marginLeft:'2rem'}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light  " aria-current="page" to="/about" style={{fontSize:'1.2rem',marginLeft:'2rem'}}>AboutME</Link>
        </li>

      
       
      </ul>
          <div className="d-flex">
   {
    auth? <>
    <button type="button" class="btn btn-secondary " onClick={()=>{setcartview(true)}} style={{fontSize:'1.2rem',   marginRight:'2rem'}}>MyCart <span class="badge badge-danger !important bg-black">{data.length}</span>
</button>
{cartview && <Modal onClose={()=>{setcartview(false)}} ><Cart/> </Modal>  }
           
       <button className="btn btn-success"  onClick={logouthandler} style={{fontSize:'1.2rem', marginRight:'2rem',color:"orange"}}>Logout</button>
    </>
   :
   <>
         <Link className="btn btn-success " to="/login" style={{fontSize:'1.2rem', marginRight:'2rem'}}>Login</Link>
       
       <Link className="btn btn-success" to="/signup" style={{fontSize:'1.2rem', marginRight:'2rem'}}>SignUp</Link>
   </>
   }
          </div>
    </div>
  </div>
</nav>
    
    
    </>
  )
}

export default Navbar
