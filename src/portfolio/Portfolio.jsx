import React from 'react';
import './Portfolio.css';
import { AiOutlineGithub,AiFillGithub,AiFillMail,AiOutlineMail,AiFillLinkedin,AiOutlineLinkedin
} from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { themeContext } from '../Context';
import { useContext } from 'react';



const Portfolio = () => {
  
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;

return (
    <div className="portfolio" id="proj" style={{ background: darkMode ? 'black':''}}>
      <h2 style={{color:darkMode ? 'white':''}}>My <span>Portfolio</span> Section</h2>
      <div className="project-cards">
        
      <div className="card" style={{border:darkMode ? '1px solid grey':''}}>
          <img src="assets/projects/Screenshot6.png" alt="" />
          <h3 style={{color:darkMode ? 'white':''}}>Amazon Clone</h3>
          <p>HTML & CSS</p>
          <p style={{color:'grey',textAlign:'center',fontSize:'14px'}} className='proj-description'>As a beginner project in web development, I decided to focus on the UI design of Amazon's website, using basic skills in HTML, CSS, and JavaScript. The resulting website is responsive and user-friendly, with a clean and modern interface that showcases high-quality product images, clear product categories, and concise product descriptions. I used Flexbox to help with layout and design, ensuring that the site is both functional and visually appealing. Throughout the project, I paid close attention to detail and consistency in design, creating a cohesive and enjoyable user experience. Overall, this Amazon clone project has helped me to develop my skills in web development and UI design.</p>
          <div className="sourcecode-icons">
              <a href="https://github.com/VaishooR/portfolio-AmazonClone-responsive" target="_blank">< AiOutlineGithub style={{fontSize:'30px'}} className='ai-icon'/></a>
              <a href="https://www.linkedin.com/posts/vaishnavi-r-bb1177159_htmlcss-javascript-amazonclone-activity-7029181926145986560-hB4M?utm_source=share&utm_medium=member_desktop" target="_blank"><AiFillLinkedin style={{fontSize:'30px'}} className='ai-icon'/></a>
              <a href="https://vaishoo-amazon-clone-responsive.netlify.app/" target="_blank"><CgWebsite style={{fontSize:'30px'}} className='web-icon' /></a>
          </div>
         
          {/* <div className="sourcecode-icons">
          <a href="https://github.com/VaishooR/1.Amazon-Clone" target="_blank"><i title="source code" class="fa-brands fa-github"></i></a>
          <a href="https://vaishoo-amazon-clone.netlify.app/" target="_blank"><i title="Live" class="fa-solid fa-display"></i></a>
          </div> */}
        </div>

        <div className="card" style={{border:darkMode ? '1px solid grey':''}}>
          <img src="assets/projects/youtube1.png" alt="" />
          <h3 style={{color:darkMode ? 'white':''}}>YouTube Clone</h3>
          <p>React</p>
          <p style={{color:'grey',textAlign:'center',fontSize:'14px'}} className='proj-description'>To build my skills in React, I created a YouTube clone website with routing and RapidAPI integration. It  features a user-friendly interface for searching and watching videos, with a clean and modern design that includes personalized recommendations and related videos. I used React Router to create a smooth navigation experience, with clear paths for browsing videos by category, channel, or search query.By integrating RapidAPI, I was able to access YouTube's API and display relevant video data, such as views, likes, and comments. I also used basic hooks such as useState and useEffect to manage state and render data dynamically. Overall, building this YouTube clone website was a challenging project that helped me to develop my skills in React, routing, and API integration.</p>
          <div className="sourcecode-icons">
              <a href="https://github.com/VaishooR/portfolio-YoutubeClone-responsive" target="_blank">< AiOutlineGithub style={{fontSize:'30px'}} className='ai-icon'/></a>
              <a href="https://www.linkedin.com/posts/vaishnavi-r-bb1177159_react-namastereact-youtubeclone-activity-7060699674424324096-VSEP?utm_source=share&utm_medium=member_desktop" target="_blank"><AiFillLinkedin style={{fontSize:'30px'}} className='ai-icon'/></a>
              <a href="https://youtube-clone-vaishoo.netlify.app/" target="_blank"><CgWebsite style={{fontSize:'30px'}} className='web-icon' /></a>
          </div>
          {/* <div className="sourcecode-icons">
          <a href="https://github.com/VaishooR/React-Weather-App1" target="_blank"><i title="source code" class="fa-brands fa-github"></i></a>
          <a href="https://eclectic-sundae-8b16c3.netlify.app/" target="_blank"><i title="Live" class="fa-solid fa-display"></i></a>
          </div> */}
        </div>
        
        <div className="card" style={{border:darkMode ? '1px solid grey':''}}>
          <img src="assets/projects/swiggy3.png" alt="" />
          <h3 style={{color:darkMode ? 'white':''}}>Swiggy Clone</h3>
          <p>React & Redux</p>
          <p style={{color:'grey',textAlign:'center',fontSize:'14px'}} className='proj-description'>To further develop my skills in React and state management, I created a Swiggy clone website with functionalities such as adding to cart, removing from cart, clearing the cart, changing the quantity of products added to cart, and displaying the total price at checkout. I used Redux for state management, learning about the store, slice, dispatching actions, and using hooks such as useReducer, useContext, and useSelector.It also includes the search functionality.Through Redux, I was able to manage the state of the cart and display the total price at checkout.The site is responsive and optimized for mobile devices, ensuring that users can easily order food on the go.Overall, building this Swiggy clone website was a valuable learning experience that helped me to develop my skills in React, Redux, and state management.</p>
          <div className="sourcecode-icons">
              <a href="https://www.linkedin.com/posts/vaishnavi-r-bb1177159_reactredux-namastereact-swiggyclone-activity-7062135199525974017-65hY?utm_source=share&utm_medium=member_desktop" target="_blank">< AiOutlineGithub style={{fontSize:'30px'}} className='ai-icon'/></a>
              <a href="https://www.linkedin.com/posts/vaishnavi-r-bb1177159_reactredux-namastereact-swiggyclone-activity-7062135199525974017-65hY?utm_source=share&utm_medium=member_desktop" target="_blank"><AiFillLinkedin style={{fontSize:'30px'}} className='ai-icon'/></a>
              <a href="https://swiggy-clone-vaishoo.netlify.app/" target="_blank"><CgWebsite style={{fontSize:'30px'}} className='web-icon' /></a>
          </div>
          {/* <div className="sourcecode-icons">
          <a href="https://github.com/VaishooR/React-Weather-App1" target="_blank"><i title="source code" class="fa-brands fa-github"></i></a>
          <a href="https://eclectic-sundae-8b16c3.netlify.app/" target="_blank"><i title="Live" class="fa-solid fa-display"></i></a>
          </div> */}
        </div>

        <div className="card" style={{border:darkMode ? '1px solid grey':''}}>
          <img src="assets/projects/shoppingapp1.png" alt="" />
          <h3 style={{color:darkMode ? 'white':''}}>ShoppingApp</h3>
          <p>React</p>
          <p style={{color:'grey',textAlign:'center',fontSize:'14px'}} className='proj-description'>This is  a simple shopping app with features such as filtering products based on rating, availability, and delivery time. I used the faker.js library to generate realistic fake data for the products, and implemented automatic rating stars based on the product's rating.The shopping app utilizes hooks such as useReducer and useContext for efficient and complex state management.Users can easily filter products based on various parameters, making it easier to find products that meet their needs. The automatic rating stars provide a clear and visual indication of a product's quality.Overall, building this simple shopping app was an excellent opportunity to gain experience with React, state management without the help of redux, and learnt to implement all the basic functionalities necessary for an e-commerce website. </p>
          <div className="sourcecode-icons">
              <a href="https://github.com/VaishooR/portfolio-ShoppingApp-responsive" target="_blank">< AiOutlineGithub style={{fontSize:'30px'}} className='ai-icon'/></a>
              <a href="https://shopping-app-vaishoo.netlify.app/" target="_blank"><CgWebsite style={{fontSize:'30px'}} className='web-icon' /></a>
          </div>
          {/* <div className="sourcecode-icons">
          <a href="https://github.com/VaishooR/React-Todo-List-1" target="_blank"><i title="source code" class="fa-brands fa-github"></i></a>
          <a href="https://clever-semolina-09800b.netlify.app/" target="_blank"><i title="Live" class="fa-solid fa-display"></i></a>
          </div> */}
        </div>

        <div className="card" style={{border:darkMode ? '1px solid grey':''}}>
          {/* <img src="assets/projects/port2.png" alt="" /> */}
          {darkMode?<img src="assets/projects/port2.png" alt="" />:<img src="assets/projects/port3.png" alt="" />}
          <h3 style={{color:darkMode ? 'white':''}}>Portfolio</h3>
          <p>React</p>
          <p style={{color:'grey',textAlign:'center',fontSize:'14px'}} className='proj-description'>To showcase my skills as a front-end developer and to gain experience with React, I created a portfolio website that utilizes components and a single-page application architecture. The site is fully responsive.I used React components to create a dynamic and interactive user experience, allowing visitors to easily navigate between sections and learn more about my background, experience, and projects.One of the key features of the portfolio website is the email JS library, which allows visitors to send me messages directly from the site. This adds a level of interactivity and convenience, and demonstrates my knowledge of integrating third-party libraries into a project.Overall, building this portfolio website was an important step in my development as a front-end developer, as it allowed me to gain experience with React, components, and single-page applications. </p>
          <div className="sourcecode-icons">
              <a href="" target="_blank">< AiOutlineGithub style={{fontSize:'30px'}} className='ai-icon'/></a>
              <a href="" target="_blank"><CgWebsite style={{fontSize:'30px'}} className='web-icon' /></a>
          </div>
          {/* <div className="sourcecode-icons">
          <a href="" target="_blank"><i title="source code" class="fa-brands fa-github"></i></a>
          <a href="" target="_blank"><i title="Live" class="fa-solid fa-display"></i></a>
          </div> */}
        </div>

        <div className="card" style={{border:darkMode ? '1px solid grey':''}}>
          <img src="assets/projects/w1.png" alt="" />
          <h3 style={{color:darkMode ? 'white':''}}>Weather App</h3>
          <p>React</p>
          <p style={{color:'grey',textAlign:'center',fontSize:'14px'}} className='proj-description'>This is a weather app that uses the OpenWeatherAPI to display current weather conditions in different locations providing accurate and up-to-date weather information. I used React to create the user interface and integrated the OpenWeatherAPI to retrieve real-time weather data. The app is fully responsive and provides users with a clear and easy-to-use interface. The weather information is presented in a visually appealing way, with icons that make it easy to understand the current weather conditions.This was the first app I built using React which helped me to develop my React skills and gain experience with API integration. </p>
          <div className="sourcecode-icons">
              <a href="https://github.com/VaishooR/React-Weather-App1" target="_blank">< AiOutlineGithub style={{fontSize:'30px'}} className='ai-icon'/></a>
              <a href="https://eclectic-sundae-8b16c3.netlify.app/" target="_blank"><CgWebsite style={{fontSize:'30px'}} className='web-icon' /></a>
          </div>
          {/* <div className="sourcecode-icons">
          <a href="https://github.com/VaishooR/React-Weather-App1" target="_blank"><i title="source code" class="fa-brands fa-github"></i></a>
          <a href="https://eclectic-sundae-8b16c3.netlify.app/" target="_blank"><i title="Live" class="fa-solid fa-display"></i></a>
          </div> */}
        </div>

        
        
       

        {/* <div className="card">
          <img src="assets/projects/todo.png" alt="" />
          <h3>Todo List</h3>
          <p>React</p>
          <div className="sourcecode-icons">
          <a href="https://github.com/VaishooR/React-Todo-List-1" target="_blank"><i title="source code" class="fa-brands fa-github"></i></a>
          <a href="https://clever-semolina-09800b.netlify.app/" target="_blank"><i title="Live" class="fa-solid fa-display"></i></a>
          </div>
        </div> */}

      
        
        {/* <div className="card">
          <img src="assets/projects/crud1.png" alt="" />
          <h3>CRUD</h3>
          <p>Javascript</p>
          <p style={{color:'grey'}}>This is a Javascript project based on CRUD methods. The details of an user can be added, deleted and also can be edited according to our requirement. </p>
          <div className="sourcecode-icons">
          <a href="https://github.com/VaishooR/HTML-CSS-JS-Projects/tree/main/07.%20CRUD" target="_blank"><i title="source code" class="fa-brands fa-github"></i></a>
          <a href="https://strong-gelato-616274.netlify.app/" target="_blank"><i title="Live" class="fa-solid fa-display"></i></a>
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default Portfolio