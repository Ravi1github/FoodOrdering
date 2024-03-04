import React, { useEffect, useState } from 'react'
import './Home.css'
import fcat from '../database/foodcategorys.json';
import fitem from '../database/fooditems.json'
import Card from './Card'
import Carasouel from './Carasouel'







function Home() {
  
  const [foodcat, setfoodcat] = useState([]);
  const [fooditem, setfooditem] = useState([]);

  const getfooddetails = async () => {
    
    setfoodcat(fcat);
    setfooditem(fitem);


  }
  useEffect(() => {
    getfooddetails();
  }, [])


  return (
    <div>
      
      <div>{<Carasouel />} </div>
   
      <div className='container'>
        {//ternary operator
          foodcat !== [] ?
            foodcat.map((data) => {
              return (
                <div className='row mb-3 cardset'>
                  <div key={data._id} className='fs-1 m-1' >
                    {data.CategoryName}
                  </div>
                <hr/>
             { fooditem!==[]? fooditem.filter((item)=>item.CategoryName===data.CategoryName).map((filteritems)=>{
              return(
                <div key={filteritems._id} className='col-12 col-md-6 col-lg-3  cardset'>
                   {/* pura as a props send karna under a single variable */}
                 {<Card fooditems={filteritems}    
                   optns={filteritems.options[0]}
                 
                 
                 
                 />
                 
                 
                 }
                </div>
              )
             })
               :
              <div>no result found</div>  }
                </div>
              )
            }) :
            <div> </div>
        }


      </div>


      
    </div>
  )
}

export default Home
