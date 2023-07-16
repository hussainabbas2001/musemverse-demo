import React from 'react';
import './App.css';
import 'remixicon/fonts/remixicon.css';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <>
    <div className=''>
    <header>
        <div>
          <img src='./images/Museumverse_logo.png' alt='ERROR'></img>
        </div>
        <div className='links'>
          <Link to="/"><i className='ri-home-2-line'></i>Home</Link>
          <Link to="/Artifacts"><i className='ri-instance-line'></i>Artifacts</Link>
          <Link to="/About"><i className='ri-error-warning-line'></i>About</Link>
        </div>
      </header>
      <div className='preview-window'>
        <Outlet/>
      </div>
    </div>
      {/* <Artifacts/> */}
    </>
    
  )
}

export default App
