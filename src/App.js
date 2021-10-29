import './App.css';
import Navbar from './components/navbar and footer/Navbar';
import SectionOne from './components/sectionOne/SectionOne';
import SectionTwo from './components/sectionTwo/SectionTwo';
import SectionThree from './components/sectionThree/SectionThree';
import Footer from './components/navbar and footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <Footer/>
    </div>
  );
}

export default App;
