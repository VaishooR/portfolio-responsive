import React,{ useRef,useState } from 'react';
import './ContactCopy.css';
import { AiOutlineGithub,AiFillGithub,AiFillMail,AiOutlineMail,AiFillLinkedin,AiOutlineLinkedin
} from "react-icons/ai";
import emailjs from '@emailjs/browser';
import { themeContext } from '../Context';
import { useContext } from 'react';



const Contact = () => {

  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;

  const form = useRef();
  const[done,setdone]=useState(false)

  console.log('done',done)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_66g6847', 'template_2x7favu', form.current, 'LFqOnmUjXf21CaeaC')
      .then((result) => {
          console.log(result.text);
          setdone(true)
      }, (error) => {
          console.log(error.text);
      });
  };
  // #1a202c
  return (
    <div className="contact-comp" style={{ background: darkMode ? 'rgb(36,36,36)':''}}> 
      <h2 style={{color:darkMode ? 'white':''}}>Contact <span>De</span>tails</h2>
    <div className="contact" id="contact">
      
      <div className='contact-content'>
        <div className='mini-icons'>
          <div style={{backgroundColor: 'black'}} title="Github"><a href="https://github.com/VaishooR" target="_blank"><AiOutlineGithub className='side-btn'/></a></div>
          <div style={{backgroundColor: 'blue'}} title="LinkedIn"><a href="https://www.linkedin.com/in/vaishnavi-r-bb1177159/" target="_blank"><AiFillLinkedin className='side-btn'/></a></div>
          <div style={{backgroundColor: 'crimson'}} title="G-mail"><a href="https://www.linkedin.com/in/vaishnavi-r-bb1177159/overlay/contact-info/" target="_blank"><AiOutlineMail className='side-btn'/></a></div>

          {/* <div title="Github"><a href="https://github.com/VaishooR" target="_blank"><i className='ccc' class="fa-brands fa-github"></i></a></div> */}
          {/* <div title="LinkedIn"><a href="https://www.linkedin.com/in/vaishnavi-r-bb1177159/" target="_blank"><span class="material-symbols-outlined">diversity_3</span></a></div> */}
          {/* <div title="Netlify"><a href="https://app.netlify.com/teams/vaishoor/sites" target="_blank"><i class="fa-solid fa-diamond"></i></a></div> */}
        </div>
        <div className="contact-buttons">
          <a href='https://github.com/VaishooR'><button className='github-btn'><span>< AiOutlineGithub className='bbb'/></span>Github</button></a>
          <a href='https://www.linkedin.com/in/vaishnavi-r-bb1177159/'><button className='linkedin-btn'><span><AiFillLinkedin className='bbb'/></span>Linked In</button></a>
          <a href='https://www.linkedin.com/in/vaishnavi-r-bb1177159/overlay/contact-info/'><button className='gmail-btn'><span><AiOutlineMail className='bbb'/></span>Gmail</button></a>
        </div>

        <div className='contact-left'>
        <form ref={form} onSubmit={sendEmail} className='form' action="">
            <input className='input' type="text" name="username" placeholder='Name'/>
            <input className='input' type="email" name="useremail" placeholder='Email Address'/>
            <textarea className='input' name="message" id="" cols="20" rows="7"  placeholder="Message . . ."></textarea>
            <input  type="submit" className=' button submitbutton' value='Send Message'/>
            {done && <div className='thank-msg' style={{color:darkMode ? 'white':''}}>Thanks for contacting me!  <button onClick={()=>setdone(false)} className='thank-btn' >x</button></div>}
          </form>
        </div>
        <div className='contact-right'>
            <img src="assets/skill-icons/services5.jpg" alt="" style={{borderRadius:darkMode ? '7px':''}}/>
        </div>
      </div>
     
    </div>
    </div>
  )
}

export default Contact



{/* <div className="contact-left">
<div className="contact-form">
  <div>Contact Me</div>
  <form action="">
    <input type="text" placeholder='Contact Number'/>
    <input type="email" placeholder='Email Address'/>
    <textarea name="" id="" cols="20" rows="5" placeholder="Type here . . ."></textarea>
    <input type="submit" className='submitbutton'/>
  </form>
</div>
</div>
<div className="contact-right">
<img src="assets/skill-icons/services5.jpg" alt="" />
</div> */}