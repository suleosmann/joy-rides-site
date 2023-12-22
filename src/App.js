import "./App.css";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import Footer from "./components/Footer"

function App() {
  return (
      <div className="App">
        <Navbar />
        <Landingpage />
        <Footer />
      </div>
  );
}

export default App;
