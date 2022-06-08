import axios from "axios";
import { useEffect, useState } from "react";
import "../css/InputForm.css";

function InputForm(props) {
  const [empname, setEmpName] = useState("");
  const [empId, setEmpId] = useState("");
  const [empDes, setEmpDes] = useState("");

  let empData = {
    name: empname,
    id: empId,
    des: empDes,
  };

  useEffect(() => {
    axios
      .post(" http://localhost:4000/employee", empData)
      .then((res) => console.log(res.data));
  }, []);

  const handleName = (event) => {
    setEmpName(event.target.value);
  };

  const handleId = (event) => {
    setEmpId(event.target.value);
  };

  const handleDes = (event) => {
    setEmpDes(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSaveEmpData(empData);

    setEmpName("");
    setEmpId("");
    setEmpDes("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type Name"
          value={empname}
          onChange={handleName}
        />
        <input
          type="number"
          placeholder="Type Id"
          value={empId}
          onChange={handleId}
        />
        <input
          type="text"
          placeholder="Type Designation"
          value={empDes}
          onChange={handleDes}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default InputForm;
