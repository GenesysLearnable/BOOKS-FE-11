import React from 'react'; 
import './LandingPage.css'


function LandingPage() {

  return (
  <div>
 
       <div className='nav'>
           <div className='logo'> <img src='images/logo.png'/></div>
           <div className='menu'>
               <ul>
                <li><a href=""> Explore books</a></li>
                <li><a href="">Study Materials</a></li>
                <li><a href="">AI Functionality</a></li>
                <li><a href="">FAQ</a></li>
                </ul>
             </div>
             <div className="sidenav"> 
             <ul>
             <a href='login.html'><button className="btn">Log in</button></a>
             <a href='login.html'><button className="btn1">Creat account</button></a>
            </ul>
          </div>
     </div>

       <div className='header'>
          <h1 className='desc'> Unlock the world of knowledge with Bookworm</h1>
         <p className='desc-para'> Access free ebooks, organize study materials, 
            and unleash the power of AI for smarter learning.
         </p>
        <div className='createacc'>
        <a href='login.html'><button className="btn1">Creat account</button></a>
        <a href='login.html'><button className="btn">Learn more</button></a>
        </div>
      </div>

     <div className='why-choose'><img src='images\Frame 169 (5).png' alt="" /> </div>
       
      
   <div className='section1'>
       <div> <img className='group4' src='images/Group 4.png' alt="" /></div>
     <div className='side-text'>
        <h5 className='main-desc'>Book Hub</h5>
        <h3 className='sub-desc'>Access Thousands of Free eBooks</h3>
       <p className='desc-sec1'>Bookworm offers students a wide range of free ebooks, 
         providing unlimited access to knowledge. Whether you're 
         studying or expanding your horizons, our platform has you
         covered. With just a few clicks, you can explore
         captivating books that fuel curiosity and enhance learning.
       </p>
    
       <a href=''><button className="btn1">Explore Free eBooks</button></a>
     </div>
    </div>

   <div className='section1'>

    <div className='side-text'>

       <h5 className='main-desc'>AI Summary</h5>
       <h3 className='sub-desc'> Simplify Your Study Material</h3>
       <p>Transform lengthy texts into clear, 
          concise summaries instantly.
          Our AI-powered tool helps you grasp key concepts
         quickly, saving you time and enhancing your understanding.
        </p>
        <a href=''><button className="btn1">Try AI Summary</button></a>

     </div>

      < div className='side-image'> <img src='images/summary gen.png' alt="" /></div>
    </div>

   <div className='section1'>
      < div className='side-image'> <img src='images/quiz gen.png' alt="" /></div>
     <div className='side-text'>
         <h5 className='main-desc'>AI Quiz Generator </h5>
         <h3 className='sub-desc'>Test Your Knowledge Effortlessly</h3>
        <p> Create customized quizzes from your
           study materials in seconds. Our AI-powered
           tool generates questions to help you review
           and retain key concepts.
         </p>
         <a href=''><button className="btn1">Try AI Summary</button></a>
        <a href='' >Generate Your Quiz</a>
      </div>
   </div>

   <div className='section1'>
     <div className='side-text'>
       <h5 className='main-desc '>Smart Note-Taking </h5> 
        <h3 className='sub-desc'>Keep Your Ideas Organized</h3>
        <p> Easily jot down, organize, and access
         your notes in one place. Our intuitive 
         tool helps you capture key points and insights effortlessly.
        </p>
        <a href=''><button className="btn1">Start Taking Notes Today</button></a>
     </div>
      <div className='side-image'> <img src='images/image 12 (2).png.' alt="" /></div>
   </div>
      <div className='why-choose'><img src='images\notable.png' alt="" /> </div>
       

    <div className='section5'>
      < div> <img src='images/Frame .png' alt="" /></div>
    </div>

    <div className='section1'>

      <div className='side-text'>
       <p>Experience the Future of Studying
         Join Bookworm to access cutting-edge 
         tools that streamline your studies
       </p>
       <button>Create Account</button>    <a href=''>Learn More</a>
     </div>

      < div className='side-image'> <img src='images/Group 4.png' alt="" /></div>
    </div>


    <div className='section7'>
          <img src='images/Group 4.png' alt="" />
         <h4>Find answers to common questions and concerns about Bookworm.</h4>
      <div> <img src='images/Group 4.png' alt="" /></div>
    </div>
   
    <div className='faq'>


    </div>



  </div>

  );
}

export default LandingPage;
