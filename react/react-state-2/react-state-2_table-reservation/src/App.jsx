import Counter from "./components/Counter";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);

  const handlePlus = () => {
    setPeople(people + 1);
  };
  const handleMinus = () => {
    setPeople(people - 1);
  };

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onhandlePlus={handlePlus} onhandleMinus={handleMinus} />
      <p>You are going to reserve a table for 2 people.</p>
    </div>
  );
}
