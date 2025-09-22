import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CRM from './components/CRM';
import LeaveManagement from './components/LeaveManagement';
import CitizenPortal from './components/CitizenPortal';
import Ecommerce from './components/Ecommerce';
import { Route, Routes } from 'react-router-dom';
import WeatherApp from './components/WeatherApp';

function App() {
  return (
    <>
      {/* Navbar is outside Routes because it's always visible */}
      <Navbar />

      {/* Define page-specific routes */}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/crm" element={<CRM />} />
        <Route path="/leave" element={<LeaveManagement />} />
        <Route path="/citizen" element={<CitizenPortal />} />
        <Route path="/weather" element={<WeatherApp/>} />
        <Route path="/ecommerce" element={<Ecommerce />} />
      </Routes>
    </>
  );
}

export default App;
