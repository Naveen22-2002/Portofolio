import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import Skills from './Components/Skills/skills'
import Works from "./Components/Works/works";
import Contacts from './Components/Contact/contact';
import Footer from './Components/Footer/footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
