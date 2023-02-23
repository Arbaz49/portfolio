import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

import "./index.css";
function App() {

  return (
    <div className="bg-gray-500">

      <div className="bg-inherit">
        <Navbar/>
        <About/>
      <Skills/>

        <Projects/>

        {/* <Projects1/> */}

        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;