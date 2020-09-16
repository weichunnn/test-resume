import React, { Fragment } from 'react';
import LandingPage from './components/LandingPage';
import Education from './components/Education';
import Experience from './components/Experience';

import './App.css';

function App() {
  return (
    <Fragment>
      <LandingPage />
      <Education />
      <Experience />
    </Fragment>
  );
}

export default App;
