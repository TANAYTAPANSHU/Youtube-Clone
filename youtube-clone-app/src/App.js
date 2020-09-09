import React from 'react';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import RecommendedVideos from './RecommendedVideos.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
     <div className="app__page">
      <Sidebar />
       <RecommendedVideos />
     </div>
    </div>
    /* Header -> <Header /> */
  /* Sidebar -> <Sidebar /> */
  /* Recommended -> <Recommend /> */


  );
}

export default App;
