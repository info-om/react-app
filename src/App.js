import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import First from "./components/js/First";
import { useState } from "react";

import Employees from "./components/js/Employees";
import NameDemo from "./components/js/NameDemo.js";

function App() {
  const [like, setLike] = useState(0);
  const handleLike = () => {
    setLike(() => like + 1);
  };
  return (
    <>
      <h1 className="btn-dark text-center">OM</h1>
      <div className="primaryContainer">
        <button className="primaryButton" onClick={handleLike}>
          {like} <span>Like</span>
        </button>
      </div>
      <First />
      <Employees />
      <NameDemo />
    </>
  );
}

export default App;
