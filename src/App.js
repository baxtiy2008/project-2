import React from 'react';
import './App.css'
import Top from './components/Top'
import BodyOne from './components/BodyOne'
import BodyTwo from './components/BodyTwo'
import BodyThree from './components/BodyThree'
import Servise from './components/Servise'
import Play from './components/Play'
import Team from './components/Team'
import Accordion from './components/Accordion/Accordion'
import Customer from './components/Customer'
import Blog from './components/Blog'
// import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Top />
      <BodyOne />
      <BodyTwo />
      <BodyThree />
      <Servise />
      <Play />
      <Team />
      <Accordion />
      <Customer />
      <Blog />
      {/* <About /> */}
      <Footer/>
    </div>
  );
}

export default App;
