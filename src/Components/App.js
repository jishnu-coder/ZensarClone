import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import {Switch,Route} from 'react-router-dom';
import Navbar from './Navbar.js';
import Home from './Homepage/Home.js';


function App() {

  
  return (
    <div  className ="whole" id="whole" >
    
      <Navbar/>
         <Route path ="/" exact component={Home} />
         {/* <Route path ="/Solutiont" exact component={Solution} />
         <Route path ="/Industies" exact component={Industies} />
         <Route path ="/Service" exact component={Service} />
         <Route path='/Alliances' exact component={Alliances} />
         <Route path='/Insight' exact component={Insight} />
         <Route path='/About us' exact component={Aboutus} /> */}
     
    </div>
  )
   
}

export default App;