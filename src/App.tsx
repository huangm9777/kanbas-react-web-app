import React from 'react';
import Kanbas from "./Kanbas";
import logo from './logo.svg';
import './App.css';
import Labs from './Labs';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        
          <h1>Mingfu Huang, CS5610.20596.202510</h1>
            {/* <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              LAB ASSIGNMENTS
            </a> 
            <br/>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              KANBAS APPLICATION 
            </a> 
            <br/>
            <a
              className="App-link"
              href="https://github.com/huangm9777/kanbas-react-web-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              CODE REPOSITORY 
            </a> 
            
           */}
          
          <body>
            <a
              className="App-link"
              href="https://github.com/huangm9777/kanbas-react-web-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              CODE REPOSITORY 
            </a> 
              <div >
              <HashRouter>
                <div>
                  <Routes>
                    <Route path="/" element={<Navigate to="Labs"/>}/>
                    <Route path="/Labs/*" element={<Labs />} />  
                    <Route path="/Kanbas/*" element={<Kanbas />} />
                  </Routes>
                </div>
              </HashRouter>
                  
              </div>
          </body>
      </div>
      </header>


    </div>
  );
}

export default App;
