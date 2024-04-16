import BookSection from "./components/Books/BookSection";
import Home from "./components/Home/Home";
import { Routes, Route } from 'react-router-dom';
import Signup from "./components/Signup";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

function App() {
  return (
    <>
      {/* <Home />
    <Books /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookSection />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App
