import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Smile from './components/smile/Smile';
import Options from './components/options/Options';
import Graphic from './components/graphic/Graphic';

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
