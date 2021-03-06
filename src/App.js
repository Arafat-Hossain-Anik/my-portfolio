import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
      <AboutUs></AboutUs>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
