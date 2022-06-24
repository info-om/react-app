import { Button } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();

  const [uName, setUName] = useState("");
  const [password, setPassword] = useState("");
  const [lmessage, setLmessage] = useState("");

  const handleUserName = (event) => {
    setUName(event.target.value);
  };
  const handleUserPass = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    console.log(uName, password);
    event.preventDefault();

    if (uName === "" || password === "") {
      setLmessage("Type UserName and Passward");
    } else {
      navigate("/header");
    }
  };

  return (
    <>
      <form className="mb-3" onSubmit={handleSubmit}>
        <label className="form-label">Name</label>
        <input
          className="form-control"
          type="text"
          value={uName}
          onChange={handleUserName}
          placeholder="Type your Name"
        />
        <label className="form-label">Passward</label>
        <input
          className="form-control"
          type="password"
          value={password}
          onChange={handleUserPass}
          placeholder="Type your Password"
        />
      </form>
      <div className="text-danger">{lmessage}</div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </>
  );
}
export default Login;
