import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Ensure space below the navbar */}
      <div className="flex-grow flex justify-center items-center w-full pt-">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}
