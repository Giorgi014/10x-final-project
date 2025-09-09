import { FaPlus, FaMinus } from "react-icons/fa6";
import "./Count.scss";

const Count = ({ quantity, onChangeQuantity }) => {
  const addItem = () => {
    onChangeQuantity(quantity + 1);
  };

  const removeItem = () => {
    if (quantity > 1) {
      onChangeQuantity(quantity - 1);
    }
  };

  const handleItemNumber = (value) => {
    const number = parseInt(value);
    if (!isNaN(number) && number > 0) {
      onChangeQuantity(number);
    }
  };

  return (
    <div className="input_cont">
      <button className="minus" onClick={removeItem}>
        <FaMinus />
      </button>
      <input
        type="text"
        className="count"
        value={quantity}
        onChange={(e) => handleItemNumber(e.target.value)}
      />
      <button className="plus" onClick={addItem}>
        <FaPlus />
      </button>
    </div>
  );
};

export default Count;
