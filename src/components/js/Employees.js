import "../css/Employees.css";
import { useEffect, useState } from "react";
import InputForm from "./InputForm";
import axios from "axios";

function Employees() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    axios
      .get(" http://localhost:4000/employee")
      .then((res) => setNames(res.data));
  }, []);

  const handleOnSaveEmpData = (fullEmpData) => {
    // setNames(...names, fullEmpData);
    // const dataemp = {
    //   ...names,
    //   //id: Math.random().toString(),
    // };
    // console.log(" line 16 employees.js  " + dataemp.id, fullEmpData);
  };
  // console.log(" line 16 employees.js  " + dataemp.id);
  return (
    <>
      <InputForm onSaveEmpData={handleOnSaveEmpData} />
      {names.map((name) => {
        return (
          <table className="table ">
            <tbody>
              <tr key={Math.random() + 1}>
                <td>{name.id}</td>
                <td>{name.name}</td>
                <td>{name.designation}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </>
  );
}
export default Employees;
