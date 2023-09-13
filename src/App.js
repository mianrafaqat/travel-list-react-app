import { useEffect, useState } from "react";

const initialItems = [
  { id: 1, description: "Shirts", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

function App() {
  const [items, setItems] = useState(initialItems);

  const handleSubmit = (description, quantity) => {
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    const tempArray = items;
    tempArray.push(newItem);
    setItems([...tempArray]);
  };
  const handleDelete = (itemId) => {
    setItems((prevItem) => prevItem.filter((item) => item.id !== itemId));
  };

  return (
    <div className="app">
      <Logo />
      <Form handleSubmit={handleSubmit} />
      <PackingList data={items} handleDelete={handleDelete} />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h1>🌴 Far Away 💼</h1>
    </div>
  );
}

function Form({ handleSubmit }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    <form
      className="add-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(description, quantity);
        setDescription("");
      }}
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
      <button type="submit">Add</button>
    </form>
  );
}

function PackingList({ data, handleDelete }) {
  return (
    <div className="list">
      <ul>
        {data.map((item) => (
          <Item item={item} key={item.id} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, handleDelete }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => {
          handleDelete(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X item on your list, and you already packed X (X%)</em>
    </footer>
  );
}

export default App;
