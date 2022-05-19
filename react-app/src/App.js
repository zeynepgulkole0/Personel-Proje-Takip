import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import * as Pages from './Pages';


function App() {
  return (

    <div className="App">
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand fs-2 text-warning px-3" href="#">JOB'TIMER</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item p-3">
                  <Link className={"mx-3 text-white fs-5 text-decoration-none"} to="/">Home Page</Link>
                </li>
                <li className="nav-item p-3">
                  <Link className={"mx-3 text-white fs-5 text-decoration-none"} to="Employee">Employee Page</Link>
                </li>
                <li className="nav-item p-3">
                  <Link className={"mx-3 text-white fs-5 text-decoration-none"} to="Project">Project Page</Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
        
      </div>

      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/employee" element={<Pages.Employee />} />
        <Route path="/project" element={<Pages.Project />} />
        <Route path='/employeeUpdate/:id' element={<Pages.EmployeeUpdate />} />
        <Route path='/projectUpdate/:id' element={<Pages.ProjectUpdate />} />
        <Route path='/list/:id' element={<Pages.List />} />
        <Route path='/listnext/:id' element={<Pages.List2 />} />

      </Routes>
    </div>
    
  );
}

export default App;
