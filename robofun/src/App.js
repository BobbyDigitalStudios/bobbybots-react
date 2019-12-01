import React from 'react';
import Header from './component/Header'
import './App.css';
import LoadRobots from './component/LoadRobots';
import './index.css'

function App() {
  return (
    <div className="App">
      {/* 
      <Filter />
      <Search />
      <Robots />      
    */}
    <Header />
      <div className="container">
        <LoadRobots />
      </div>

    </div>
  );
}

export default App;
