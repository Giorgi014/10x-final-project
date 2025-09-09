import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import "./Count.scss";

const Count = () => {
  const [count, setCount] = useState(1);

  const addItem = () => {
    setCount((plus) => plus + 1);
  };
  const removeItem = () => {
    if (count > 1) {
      setCount((minus) => minus - 1);
    }
  };
  const handleItemNumber = (value) => {
    setBetAmount(parseFloat(value));
  };

  return (
    <div className="input_cont">
      <button className="minus" onClick={removeItem}>
        <FaMinus />
      </button>
      <input
        type="text"
        className="count"
        value={count}
        onChange={(e) => handleItemNumber(e.target.value)}
      />
      <button className="plus" onClick={addItem}>
        <FaPlus />
      </button>
    </div>
  );
};

export default Count;
