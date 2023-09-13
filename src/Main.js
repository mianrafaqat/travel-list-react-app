import { useEffect, useState } from "react";
import Form from "./Form";
import PackingList from "./PackingList";

const Logo = () => {
  return (
    <div>
      <h1>🌴 Far Away 💼</h1>
    </div>
  );
};

const Stats = () => {
  return (
    <footer className="stats">
      <em>💼 You have X item on your list, and you already packed X (X%)</em>
    </footer>
  );
};

const initialItems = [
  { id: 1, description: "Shirts", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

const Main = () => {
  const [items, setItems] = useState();
  const [data, setData] = useState([]);

  const handleSubmit = (description, quantity) => {
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    const tempArray = items;
    tempArray.push(newItem);
    setItems([...tempArray]);
  };

  useEffect(() => {
    setData(items);
    console.log(items, "Useeffect");
  }, [items]);

  return (
    <>
      <Logo />
      <Form handleSubmit={handleSubmit} />
      <PackingList data={items} />
      <Stats />{" "}
    </>
  );
};

export default Main;
