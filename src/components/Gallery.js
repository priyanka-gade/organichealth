import { Link } from 'react-router-dom';

import React from "react";
const Gallery=()=>{

    return(
        <div className="outer">
            <div className="topdiv">
                <h1 className="title">Fruits and Veggies</h1> 
                <button className="btnstyle" style={{marginRight:'250px'}}><Link to='/lst' className='createbtn'>Join Now</Link></button>
            </div><br/><br/><br/>
           <div className="col inner">
                <img className="galleryimgs" alt="gallary images fruits and veggies" src="./images/strawberries.jpg" style={{width:'350px', height:'235px'}}></img>
                <img className="galleryimgs" alt="gallary images fruits and veggies" src="./images/vegetable.jpg" style={{width:'350px', height:'235px'}}></img>
                <img className="galleryimgs" alt="gallary images fruits and veggies" src="./images/banana.jpeg" style={{width:'350px', height:'235px'}}></img>
           </div>
           <div className="col inner">
                <img className="galleryimgs" alt="gallary images fruits and veggies" src="./images/cherry.jpg" style={{width:'350px', height:'235px'}}></img>
                <img className="galleryimgs" alt="gallary images fruits and veggies" src="./images/tangerines.jpg" style={{width:'350px', height:'235px'}}></img>
                <img className="galleryimgs" alt="gallary images fruits and veggies" src="./images/vegetables.jpg" style={{width:'350px', height:'235px'}}></img>

           </div>
           <div className="col inner">
                <img className="galleryimgs" alt="gallary images fruits and veggies" src="./images/banana.jpeg" style={{width:'350px', height:'235px'}}></img>
                <img className="galleryimgs" alt="gallary images fruits and veggies" src="./images/vegetable.jpg" style={{width:'350px', height:'235px'}}></img>
                <img className="galleryimgs" alt="gallary images fruits and veggies" src="./images/pomegranate.jpg" style={{width:'350px', height:'235px'}}></img>
           </div>
           
            {/* <img className="galleryimgs" alt="gallary images fruits and veggies" src="./images/stab.webp" style={{width:'350px', height:'300px'}}></img>
            <img className="galleryimgs" alt="gallary images fruits and veggies" src="./images/watermelon.webp" style={{width:'350px', height:'300px'}}></img>
            <img className="galleryimgs" alt="gallary images fruits and veggies" src="./images/mint.jpeg" style={{width:'350px', height:'300px'}}></img>
            <img className="galleryimgs" alt="gallary images fruits and veggies" src="./images/lemon.jpeg" style={{width:'350px', height:'300px'}}></img>
            <img className="galleryimgs" alt="gallary images fruits and veggies" src="./images/kakdi.jpeg" style={{width:'350px', height:'300px'}}></img> */}
          
          <div className='row'>
                <div className='col'>
                    <img src='./images/Fresh-Healthy.jpg' alt='logo' style={{height:"100px", width:"200px"}}></img><br/>
                    <h5 style={{fontFamily: 'cursive'}}>Food facts for healthy choices..</h5>
                </div>
                <div style={{backgroundColor:'black', color:'white', paddingTop:'5px'}}>
                    <p>@CopyRight March 2024</p>
                </div>
            </div>
        </div>
    )
}
export default Gallery;