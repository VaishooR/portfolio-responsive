import './App.css';
import Header from './header/Header';
import Homepage from './homepage/Homepage';
import Portfolio from './portfolio/Portfolio';
import Skills from './skills/Skills';
import Contact from './contact/Contact';
import Footerr from './footer/Footerr.jsx';
import { themeContext } from './Context';
import { useContext } from 'react';


function App() {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;

  return (
    <div className="app" 
    style={{ background: darkMode ? 'black':'',
    color:darkMode ?'white':''}}>
      <Header/>
      <div className="sections">
          <Homepage/>
          <Portfolio/>
          <Skills/>
          <Contact/>
          <Footerr/>
      </div>
     
     

      
    </div>
  );
}

export default App;

