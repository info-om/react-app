import { useState } from "react";
import "../css/First.css";
function First() {
  const [increase, setincrease] = useState(0);

  const handleIncrease = () => {
    setincrease(() => increase + 5);
  };
  const handleDecrease = () => {
    setincrease(() => increase - 2);
  };
  return (
    <div className="buttonBox">
      Value={increase}
      <button className="changePlus" onClick={handleIncrease}>
        +
      </button>
      <button className="changeMinus" onClick={handleDecrease}>
        -
      </button>
    </div>
  );
}

export default First;
