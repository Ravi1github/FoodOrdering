import React, { useEffect, useRef, useState } from 'react'
import { useCart, useDispatchCart } from './Contextreducer';


 export default function Card(props) {
  let fooditems=props.fooditems;

let optns=props.optns;
//opject ke key ko ek array me store kar deta hai
let priceoption=Object.keys(optns);

let dispatch=useDispatchCart();
let data=useCart();
const priceRef=useRef();

const[Qty,setQty]=useState(1);
const[size,setsize]=useState("");

const handleAddtoCart=async()=>{
let food=[];
for(const item of food)
{
  if(item.id===fooditems._id)
  {
    food=item;
    break;
  }
}
if(food!==[])
{
  if(food.size===size)
  {
    await dispatch({type:"UPDATE",id:fooditems._id,price:finalprice,Qty:Qty});
    return
  }

else if(food.size!==size)
{
  await dispatch({type:"ADD",id:fooditems._id,name:fooditems.name,price:finalprice,Qty:Qty,size:size});
  return
}
return
}
//new order hai
await dispatch({type:"ADD",id:fooditems._id,name:fooditems.name,price:finalprice,Qty:Qty,size:size});
console.log(data);
}

let finalprice=Qty*parseInt(optns[size]);

useEffect(()=>{
setsize(priceRef.current.value);
},[])

  return (
    <>
    <div className="card mt-4  .cardset"  style={{width:"18rem",borderRadius:"30px",color:'white', backgroundColor:'#1e272e'}}>
    <img src={fooditems.img} style={{height:'200px',margin:"auto",borderRadius:"20px"}} className="card-img-top" alt="..."/>
    <div className="card-body" style={{fontSize:"20px"}}> <strong> {fooditems.name}</strong>
      
  
      <div className="container w-100">
  
          <select className='m-2 h-100  bg-light rounded'  onChange={(event)=>{setQty(event.target.value)}}   >
            { Array.from(Array(6),(e,i)=>{
              return(
                  <option key={i+1}value={i+1} >{i+1}</option>
              )
            })
  
            }
          </select>
          <select className='m-2 h-100 bg-light rounded' ref={priceRef} onChange={(event)=>{setsize(event.target.value)}}  >
           {      
          priceoption.map((element)=>{
          return <option key={element} value={element}>{element}</option>
            
          }) 
            }
          </select>
  <div className='d-inline h-100 '> <strong>&#x20B9;{finalprice}/-</strong> 

  </div>
 
      </div>
      <hr/>
  <button className={`btn btn-success justify-center ms-2`}onClick={handleAddtoCart} >ADD TO CART</button>
    </div>
    
  </div>

  </>
  )
}


