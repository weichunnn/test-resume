import React, { Fragment } from 'react';
import LandingPage from './components/LandingPage';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';

import './App.css';

function App() {
  return (
    <Fragment>
      <LandingPage />
      <Education />
      <Experience />
      <Skills />
    </Fragment>
  );
}

export default App;
