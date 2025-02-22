import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Newsboard from "./components/newsboard";
import Home from "./components/Home"; // Ensure you have a Home component
import Carer from "./components/carer";
import Web from "./components/web";
import './App.css';
import Category from "./components/category";
import Cyber from "./components/cyber";
import Ai from './components/ai';
import Ds from './components/ds';
import ContactPage from "./components/contact";
import SignInPage from "./components/sign";
import SignUpPage from "./components/signup";
import Byn from "./components/byn";
import SuccessStories from "./components/ss";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />  {/* Default Home Page */}
        <Route path="/home" element={<Home />} />  {/* Default Home Page */}
        <Route path="/news" element={<Newsboard />} />  {/* News Page */}
        <Route path="/category" element={<Category />} /> {/* category  Page */}
        <Route path="/carer" element={<Carer />} /> {/* category  Page */}
        <Route path="/web" element={<Web />} />  {/* Default Home Page */}
        <Route path="/cyber" element={<Cyber />} />  {/* Default Home Page */}
        <Route path="/ai" element={<Ai />} />  {/* Default Home Page */}
        <Route path="/ds" element={<Ds />} />  {/* Default Home Page */}
        <Route path="/contact" element={<ContactPage />} />  {/* Default Home Page */}
        <Route path="/signin" element={<SignInPage />} />  {/* Default Home Page */}
        <Route path="/signup" element={<SignUpPage />} />  {/* Default Home Page */}
        <Route path="/build" element={<Byn />} />  {/* Default Home Page */}
        <Route path="/success" element={<SuccessStories />} />  {/* Default Home Page */}
      </Routes>
    </Router>
  );
}

export default App;
