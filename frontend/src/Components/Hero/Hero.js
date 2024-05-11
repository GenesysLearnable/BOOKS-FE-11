import React from 'react'
import './Hero.css'
import Sidebar from '../Sidebar/sidebar.js'
import book1 from '../../Images/book1.png'
import searchicon from '../../Images/Icons/search-icon.svg'
import filterbutton from '../../Images/Icons/filter-button.svg'



const Hero = () => {
  return (
  
    <section className='container'>
        <Sidebar/>
        <div className='hero-container'>
        <div className='pic-content'>
         <div className='search'>
         <img src={searchicon} alt='icon' />

           <input className='input-box' placeholder='Author, book, topic...' type='text'/>

           <div>
             <button className='filter-btn'>
            <img src={filterbutton} alt='icon' />  Filter</button>
           </div>
           
         </div>

        </div>

       
       <div className='Book-details'> 
       <div>
        <h3>Continue Reading</h3>

        <div className='Wrapping'>
        <img style={{width: '100px', height: '80px'}} src={book1} alt='b00k1-pic' className='book-list' />

        <div className='book-text'>
        <h4>Joanne Willey, Linda Sherwood,and Christopher J. Woolverton </h4> 
        <p className='micro'>Microbiology</p>

         <h6> Pages 267 <span>of 3,563</span> &#32;1% </h6>
        </div>
       
        </div>  

       </div>
       <div>
        <h3>Category</h3>
       </div>

       <div></div>
       <div></div>
       <div></div>
       <div></div>
       
       </div>
        </div>
    
  </section>
  )
}

export default Hero
