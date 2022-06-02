import "../css/Employees.css";
import { useState } from "react";
import InputForm from "./InputForm";

function Employees() {
  const [names, setNames] = useState([
    { id: 123, name: "OM", designation: "Abc" },
    { id: 124, name: "PRAKASH", designation: "DEF" },
    { id: 125, name: "DHIRAJ", designation: "GHI" },
  ]);
  const handleOnSaveEmpData = (fullEmpData) => {
    const dataemp = {
      ...fullEmpData,
      id: Math.random().toString(),
    };
    console.log(" line 16 employees.js  " + dataemp.id, fullEmpData);
  };
  // console.log(" line 16 employees.js  " + dataemp.id);
  return (
    <>
      <InputForm onSaveEmpData={handleOnSaveEmpData} />
      {names.map((name) => {
        return (
          <div className="employee" key={Math.random() + 1}>
            <span>{name.id}</span> <span>{name.name}</span>
            <span>{name.designation}</span>
          </div>
        );
      })}
    </>
  );
}
export default Employees;
