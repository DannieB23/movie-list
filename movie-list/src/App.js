// import logo from './logo.svg';
//import './App.css';
import Movies from './components/Movies'
import PrimarySearchAppBar from './components/SearchBar'
import React, { useState } from 'react';


function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <PrimarySearchAppBar onSearch={setSearchQuery} />
      <Movies searchQuery={searchQuery} />
    </div>
  );
}

export default App;
