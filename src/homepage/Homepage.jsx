import React from 'react';
import './Homepage.css';
import { themeContext } from '../Context';
import { useContext } from 'react';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';


const Homepage = () => {

  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;

  const textRef=useRef();
  useEffect(()=>{
    init(textRef.current, { showCursor: false, strings: ['Front-End Developer'], startDelay: 500, backDelay:  1500, autoStart:true,
    loop:true})
  },[])

  return (
    <div className="homepage" id="home" style={{ background: darkMode ? 'black':''}}>
        <div className="homepage-content">
            <div className="homepage-content-left">
                <div style={{color:darkMode ? 'white':''}}>Hy! I Am</div>
                <div className='vaishnavi'>Vaishnavi.R</div>
                <div ref={textRef} style={{color:darkMode ? 'white':''}}></div>
                {/* <div style={{color:darkMode ? 'white':''}}>Front End Developer</div>  */}
                <a href="#contact"><button className="button homepage-hireme-btn">Hire Me</button></a>
            </div>



            <div className="homepage-content-right">
                <div className='background-circle'>
                   <img className='mypic' src="assets/vaishnew.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage