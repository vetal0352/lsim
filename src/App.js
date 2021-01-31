import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Smile from './components/Smile';
import Options from './components/Options';
import Graphic from './components/Graphic';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <Smile />
      <Options />
      <Graphic />
    </div>
  );
}

export default App;
