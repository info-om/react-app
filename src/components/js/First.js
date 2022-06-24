import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/First.css";
function First() {
  const [increase, setincrease] = useState(0);

  const [like, setLike] = useState(0);

  const handleLike = () => {
    setLike(() => like + 1);
  };
  const handleIncrease = () => {
    setincrease(() => increase + 5);
  };
  const handleDecrease = () => {
    setincrease(() => increase - 2);
  };
  return (
    <>
      <Link to="/ ">
        <button> Back </button>
      </Link>
      {/* <a href="./">
        <button>Back To Main</button>
      </a> */}
      <h1>Home component</h1>

      <button className="primaryButton" onClick={handleLike}>
        {like} <span>Like</span>
      </button>

      <div className="buttonBox">
        Value={increase}
        <button className="changePlus" onClick={handleIncrease}>
          +
        </button>
        <button className="changeMinus" onClick={handleDecrease}>
          -
        </button>
      </div>
    </>
  );
}

export default First;
