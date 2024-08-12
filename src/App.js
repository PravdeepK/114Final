import React from 'react';
import SearchBar from './SearchBar';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="search-bar">
          <SearchBar />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
