import "./App.css";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import Footer from "./components/Footer"
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
      <div className="App">
        <Navbar />
        <Landingpage />
        <About/>
        <Contact/>
        <Footer />
      </div>
  );
}

export default App;
