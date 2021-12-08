import React from 'react';

const Contact=({onRouteChange})=>{
    return(
     <div>
         <section id="contact">
          <div className="heading">
          <h2>Contact us to get started</h2>
          </div>
          <div className="information">
              <input type="text" placeholder="First Name"/>
              <input type="text" placeholder="Last Name"/>
              <input type="text" placeholder="Institute Name"/>
              <input type="text" placeholder="Email Address"/>
              <input type="text" placeholder="Phone Number"/>
          </div>
        
        
          <div className="call-to-action" onClick={onRouteChange}>
          <a href="">Contact Us</a>
          </div>
        
        
          <div className="details">
        <div className="detail">
          <p>WHY LOOSELEAF?</p>
        <i class="fas fa-chevron-down"></i>
        </div>
        <div className="detail">
          <p>PRICING</p>
        <i class="fas fa-chevron-down"></i>
        </div>
        <div className="detail">
          <p>RESOURCES</p>
        <i class="fas fa-chevron-down"></i>
        </div>
        <div className="detail">
          <p>OUR OFFICES</p>
        <i class="fas fa-chevron-down"></i>
        </div>
          </div>
          
          <div className="contact-detail">
          <div className="contact">
          <h2>CONTACT NUMBER</h2>
          <p>+91-8306234318</p>
          </div>
          <div className="contact-info">
          <p>Instruction by story self</p>
          <p>2021, Looseleaf, All right reserved</p>
          </div>
          <div className="contact-icons">
          <nav>
            <ul className="iconss">
            <li><a href="#"><i className="fab fa-whatsapp"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>  
          </nav>    
          </div>
            <div className="contact-end">
            <p>Made in India with &hearts;</p>  
            </div>
            <div className="line"></div>
            <hr/>
            <div className="footer">
            <nav>
             <ul className="icons2">
            <li><a href="">Privacy</a></li>
            <li><a href="">Terms</a></li>
            <li><a href="">Contact Us</a></li>
            </ul>   
            </nav>  
            </div>
          </div>
          
       
      </section>
         </div>
    );
}
export default Contact;