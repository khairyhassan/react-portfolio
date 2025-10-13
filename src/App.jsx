import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';

function App() {
  

  return (
    <>
      <Home/>
      <Navbar/>
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
