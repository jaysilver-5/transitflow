import React from 'react';
import Header from "./components/Header";
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Services from './components/Services';
import About from './components/About';
import Count from './components/Count';
import Projects from './components/Projects';
import Testimonails from './components/Testimonails';
import Choose from './components/Choose';
import Team from './components/Team';
import Contact from './components/Contact';
import Blog from './components/Blog'
import FooterNav from './components/FooterNav';
import Footer from './components/Footer';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Header className='bg-secondary w-screen overflow-x-hidden'/>
      <Banner/>
      <Navbar className='w-screen bg-secondary bg-opacity-25 overflow-x-hidden'/>
      <Services/>
      <About/>
      <Count/>
      <Projects/>
      <Testimonails/>
      <Choose/>
      <Team/>
      <Contact/>
      <Blog/>
      <FooterNav/>
      <Footer/>
    </div>
  );
}

export default App;
