import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Main from "./Main/main";
import Footer from './components/Footer/footer';

function App() {
  return (
    <div>
      <Router>
        {/* <Header /> */}
        <Main />
        <Footer/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About  />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
