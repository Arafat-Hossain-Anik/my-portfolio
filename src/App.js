import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
      <AboutUs></AboutUs>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
}

export default App;
