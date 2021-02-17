import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Smile from './components/smile/Smile';
import Options from './components/options/Options';
//import Graphic from './components/graphic/Graphic';
import GraphicLSIM1 from './components/graphic1/GraphicLSIM1';
import GraphicLSIM2 from './components/graphic2/GraphicLSIM2';
import GraphicLSIM3 from './components/graphic3/GraphicLSIM3';
import GraphicLSIM4 from './components/graphic4/GraphicLSIM4';
import GraphicLSIM5 from './components/graphic5/GraphicLSIM5';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <Smile />
        <Options />
        <div>
          <Route exact path="/" render={() => <GraphicLSIM1 />} />
          <Route exact path="/lsim1" component={GraphicLSIM1} />
          <Route exact path="/lsim2" component={GraphicLSIM2} />
          <Route exact path="/lsim3" component={GraphicLSIM3} />
          <Route exact path="/lsim4" component={GraphicLSIM4} />
          <Route exact path="/lsim5" component={GraphicLSIM5} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
