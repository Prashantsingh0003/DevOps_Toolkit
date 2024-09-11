import React from 'react';
import Header from './components/Header';
import ToolkitList from './components/ToolkitList';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ToolkitList />
      <Footer />
    </div>
  );
}

export default App;