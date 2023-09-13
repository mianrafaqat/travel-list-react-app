import { useState } from "react";

const Form = ({ handleSubmit }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    <form
      className="add-form"
      //   onSubmit={}
    >
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        // type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit(description, quantity);
          setDescription("");
        }}
      >
        Add
      </button>
    </form>
  );
};

export default Form;
