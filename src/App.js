import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {

  console.log(navigator.userAgent);

  return (
    <>
    <Navbar />
    <Hero />
    </>
  );
}

export default App;



