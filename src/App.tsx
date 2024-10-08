import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage";
import OurCraft from "./Pages/OurCraft/OurCraft";
import "./App.css";
import CaseStudy from "./Pages/CaseStudy/CaseStudy";
import Navpage from "./Pages/NavPage/Navpage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/crafts" element={<OurCraft />} />
          <Route path="/case-studies/:projectId" element={<CaseStudy />} />
          <Route path="/nav-bar" element={<Navpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
