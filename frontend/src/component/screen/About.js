import React from 'react'
import image from '../../component/my2.jpeg'
import './about.css';
function About() {
  return (
    <div>
      <div class="container-fluid main_header">
        <div class="row">

            <div class="col-md-10 col-12 mx-auto">
                <div class="row">
                  
                    <div class="col-md-6 main_header_right">
                     <img src={image} width="400px" alt="" class="myimg"/>  
                    </div>
                    <div class="col-md-6 main_header_left">
                        <p>welcome to <span>My site</span> </p>
                        <h1>my name is <span> ravi kumar jaiswal</span> I am a <span> MERN stack developer</span> </h1>
                        <a href="/"><button>About me</button></a>
                    </div>
                   
                    
                </div>


            </div>
        </div>
    </div>
    </div>
  )
}

export default About
