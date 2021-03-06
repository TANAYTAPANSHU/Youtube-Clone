import React from 'react';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import RecommendedVideos from './RecommendedVideos.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import SearchPage from './SearchPage';
import SearchPage1 from './SearchPage1';

function App() {
  return (
    <div className="App">
    <Router>
    <Header />
       
    <Switch>
      <Route path="/search/Warrior Programmer">
   
           <div className="app__page">
        
      <Sidebar />
       <SearchPage />
     </div>


     </Route>
     <Route path="/search/:searchTerm">
   
           <div className="app__page">
        
      <Sidebar />
       <SearchPage1 />
     </div>
    </Route>
   
      <Route path="/">
     
     <div className="app__page">
        
      <Sidebar />
       <RecommendedVideos />
     </div>

     </Route>


        </Switch>



    </Router>







    </div>







    /* Header -> <Header /> */
  /* Sidebar -> <Sidebar /> */
  /* Recommended -> <Recommend /> */


  );
}

export default App;
