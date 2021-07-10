import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Smile from './components/smile/Smile';
import Options1 from './components/options1/Options1';
//import Graphic from './components/graphic/Graphic';
import GraphicLSIM1 from './components/graphic1/GraphicLSIM1';
import GraphicLSIM2 from './components/graphic2/GraphicLSIM2';
import GraphicLSIM3 from './components/graphic3/GraphicLSIM3';
import GraphicLSIM4 from './components/graphic4/GraphicLSIM4';
import GraphicLSIM5 from './components/graphic5/GraphicLSIM5';
import { BrowserRouter, Route } from 'react-router-dom';
import styles from "./components/graphic3/GraphicLSIM3.module.css"

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className={styles.graphic}>
          <Route exact path="/" render={() => <GraphicLSIM1 />} />
          <Route exact path="/lsim1" component={GraphicLSIM1} />
          <Route exact path="/lsim2" component={GraphicLSIM2} />
          <Route exact path="/lsim3" component={GraphicLSIM3} />
          <Route exact path="/lsim4" component={GraphicLSIM4} />
          <Route exact path="/lsim5" component={GraphicLSIM5} />
        </div>
        <Smile />
        <div>
          <Route exact path="/" render={() => <Options1 />} />
          <Route exact path="/lsim1" component={Options1} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
