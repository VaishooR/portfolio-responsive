import React from 'react';
import './Footerr.css';
import { themeContext } from '../Context';
import { useContext } from 'react';

const Footerr = () => {

  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;

  return (
    <div className="footer" style={{ background: darkMode ? 'black':''}}>
      <p style={{color:darkMode ? 'white':''}}>&#169; Designed & built by Vaishnavi,2023 </p>
    </div>
  )
}

export default Footerr