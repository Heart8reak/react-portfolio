import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Education from './components/education/Education';
import Work from './components/work/Work';
import './App.css';

import resumeData from './data/resumeData';
import workData from './data/workData';
import educationData from './data/educationData';

function App() {
  return (
    <div className="App">
      <Header resumeData={resumeData} />
      <About />
      <Education educationData={educationData} />
      <Work workData={workData} />
      {/* <ContactUs /> */}
    </div>
  );
}

export default App;
