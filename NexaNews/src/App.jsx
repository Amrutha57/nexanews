import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Newsboard from "./components/newsboard";
import Home from "./components/Home"; // Ensure you have a Home component
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  {/* Default Home Page */}
        <Route path="/news" element={<Newsboard />} />  {/* News Page */}
      </Routes>
    </Router>
  );
}

export default App;
