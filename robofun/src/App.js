import React from 'react';
import Header from './component/Header'
import './App.css';
import LoadRobots from './component/LoadRobots';
import Search from './component/Search';
import Filter from './component/Filter';
import './index.css'

function App() {

  return (
    <div className="App">
      {/* 
        <Search />
        <Robots />      
      */}
      <div className="sticky">
        <Search />
        <Header />
        <Filter />
      </div>
      <div className="container">
        <LoadRobots />
      </div>

    </div>
  );
}




export default App;
