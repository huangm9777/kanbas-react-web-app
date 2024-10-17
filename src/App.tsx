import React from 'react';
import Kanbas from "./Kanbas";
import './App.css';
import Labs from './Labs';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
        
          
          <body>
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
