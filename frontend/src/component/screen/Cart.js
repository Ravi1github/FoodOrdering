import React from 'react'
import { useCart, useDispatchCart } from './Contextreducer'

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-1' style={{color:'green'}}>The Cart is Empty!</div>
      </div>
    )
  }
  
  //handler cart
  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    
    let response = await fetch("http://localhost:4000/orderdata", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
    console.log("JSON RESPONSE:::::", response.status)
    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
  }



  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
    <div>

     
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md !important  text-success !important' >
        <table className='table table-hover '>
          <thead className=' text-danger fs-2'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr className='text-light '>
                <th scope='row' className='text-info' >{index + 1}</th>
                <td className='text-info' >{food.name}</td>
                <td className='text-info' >{food.Qty}</td>
                <td className='text-info' > {food.size}</td>
                <td className='text-info' >{food.price}</td>
                <td className='text-info'  ><button type="button" className="btn p-0"><img src="https://static.vecteezy.com/system/resources/previews/000/017/310/original/ blue-delete-button-vector.jpg" width='30px' onClick={() => { dispatch({ type: "REMOVE", index: index }) }} alt="" /> </button> </td></tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-1'>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-success mt-5 'onClick={handleCheckOut}> Check Out </button>
        </div>

      </div>



    </div>
  )
}