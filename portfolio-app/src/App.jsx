import Navbar from "./components/pages/NavBar.jsx";
import Home from "./components/pages/Home.jsx";
import Projects from "./components/pages/Projects.jsx";
import Contact from "./components/pages/Contact.jsx";
import CodeSymbole from "/src/components/CodeSymbole.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/styles/App.css";

function App() {
 
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
     <CodeSymbole/>
    </>
  );
}

export default App;
