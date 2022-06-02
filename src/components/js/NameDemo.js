//import axios from "axios";
import { useState } from "react";
import "../css/nameDemo.css";

function NameDemo() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSucces] = useState("");

  const handleName = (event) => {
    // event.preventDefault();
    setName(event.target.value);
    // document.querySelector(".namefeild").classList.remove("hidden");
    // document.querySelector(".errorfeiled").classList.remove("hidden");
    // document.querySelector(".successfeild").classList.remove("hidden");
    setSucces("");
    setError("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    if (name === "") {
      setError("Enter your name");
    } else {
      setSucces("Thanks");
      setName("");
    }
  };

  const handleout = () => {
    setSucces("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="namefeild ">{name}</div>
        {error ? <div className="errorfeiled ">{error}</div> : null}
        {success ? <div className="successfeild ">{success}</div> : null}
        <input
          type="text"
          value={name}
          onMouseOut={handleout}
          onChange={handleName}
          placeholder="Type Name......"
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
export default NameDemo;
