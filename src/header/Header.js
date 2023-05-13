import React from 'react';
import './Header.css';
import DarkLight from '../darkLight/DarkLight';


import { themeContext } from '../Context';
import { useContext } from 'react';

const Header = () => {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="header" style={{ background: darkMode ? 'black':''}}>

        <div className="header-left">
            <div className="header-name" style={{color:darkMode ? 'white':''}}>Vaishnavi</div>
            <div style={{display:'flex',alignItems:'center'}}>
            {/* <a href="https://drive.google.com/file/d/1cyDcz_pBaxrEde8BlNK4yKHz8O9BOYhS/view?usp=sharing"><button className="button header-resume-btn">Resume</button></a> */}
            <a href="https://drive.google.com/file/d/1ixaGMeR8MPKK9yDl3FeJnzbPjJRw6pQY/view"><button className="button header-resume-btn">Resume</button></a>
            <DarkLight/>
            </div>
        </div>

        <div className="header-right">
            <ul>
                <li><a href="#home" style={{color:darkMode ? 'white':''}}>Home</a></li>
                <li><a href="#proj" style={{color:darkMode ? 'white':''}}>Projects</a></li>
                <li><a href="#skills" style={{color:darkMode ? 'white':''}}>Skills</a></li>
                <li><a href="#contact" style={{color:darkMode ? 'white':''}}>Contact</a></li>
            </ul>
            <a href="#proj"><button className='button header-portfolio-btn'>Portfolio</button></a>   
        </div>

    </div>
  )
}

export default Header