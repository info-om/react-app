import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/js/Home";
import About from "./components/js/About";
import Contact from "./components/js/Contact";
import Header from "./components/js/Header";
import PageNF from "./components/js/PageNF";
import Login from "./components/js/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        {/* <Route index element={<Home />} /> // default components */}
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNF />} />
      </Route>
    </Routes>
  );
}

export default App;
