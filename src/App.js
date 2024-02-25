import logo from './logo.svg';
import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import RegisterCoaching from './component/RegisterCoaching';
import RegisterRecretional from './component/RegisterRecretional';
import RegisterCoach from './component/RegisterCoach';
import Dashboard from './component/Dashboard';
import CoachData from './component/Coachdatas';
import Receipt from './component/Receipt';
import Receiptr from './component/Receiptr';
import ViewRecretional from './component/ViewRecretional';
import ViewCoaching from './component/viewCoaching';
import AdminLogin from './component/AdminLogin';
import GenerateReciept from './component/GenerateReciept';
import Reports from './component/Reports';
import Search from './component/Search';
import Attendance from './component/Attendance'; // Corrected import
import 'react-toastify/dist/ReactToastify.css';

import {  
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ContactUs from './component/ContactUs';
import Joinus from './component/JoinUs';
import ShowFooter_Context from './component/ShowFooter_Context';
import Gallery from './component/Gallery';
import AboutUs from './component/AboutUs';


function App() {


  const [dbpath, setdbpath] = useState('https://test.royalswebtech.com/test/');
  const [btnStatus, setBtnstatus] = useState('Admin Login');



  const{showFooter, setShowFooter} = useContext(ShowFooter_Context);
  console.log(showFooter);

  return (
    <>    
      <Router>
        {/* <Header btnStatus={btnStatus} /> */}
  
        <Header btnStatus={btnStatus} />

        <Routes>
          <Route exact path="/" element={
              <>
                <Home dbpath={dbpath} />
              </>
          }>
          </Route>
          <Route exact path="/AdminLogin" element={
              <AdminLogin dbpath={dbpath} setBtnstatus={setBtnstatus}  />
          }></Route>
          <Route exact path="/RegisterCoaching" element={
              <RegisterCoaching dbpath={dbpath}/>
          }>
          </Route> 
          <Route exact path="/RegisterRecretional" element={
              <RegisterRecretional dbpath={dbpath}/>
          }>
          </Route> 
          
          <Route exact path="/RegisterCoach" element={
              <RegisterCoach dbpath={dbpath}/>
          }>
          </Route> 
          <Route exact path="/Dashboard" element={
              <Dashboard dbpath={dbpath} setBtnstatus={setBtnstatus} />
          }>
            </Route> 
          <Route exact path="/ViewRecretional" element={
              <ViewRecretional dbpath={dbpath}/>
          }></Route>
           <Route exact path="/ViewCoaching" element={
              <ViewCoaching dbpath={dbpath}/>
          }></Route>
          
          <Route exact path="/Receipt" element={
              <Receipt dbpath={dbpath}/>
          }></Route>
          <Route exact path="/Receiptr" element={
              <Receiptr dbpath={dbpath} />
          }></Route>
         
         <Route exact path="/CoachData" element={
              <CoachData dbpath={dbpath} />
          }></Route>

          <Route exact path="/Reports" element={
              <Reports dbpath={dbpath} />
          }></Route>

          <Route exact path="/Search" element={
              <Search dbpath={dbpath} />
          }></Route>
          <Route exact path="/Attendance" element={
              <Attendance /> // Corrected component usage
          }></Route>
          
          <Route exact path="/GenerateReciept" element={
              <GenerateReciept dbpath={dbpath} />
          }></Route>
          
          <Route exact path="/ContactUs" element={
              <ContactUs/>
          }>
          </Route>
          <Route exact path="/JoinUs" element={
              <Joinus/>
          }>
          </Route>

          <Route exact path="/Gallery" element={
              <Gallery />
          }>
          </Route>
          
          <Route exact path="/AboutUs" element={
              <AboutUs />
          }>
          </Route>

        </Routes>
        {showFooter && <Footer /> }
      </Router>
    </>

  );
}

export default App;
