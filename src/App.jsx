import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";
import "./index.css";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
