import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    { id: "1", name: "watermelon 🍉", color: "green, red, seeds" },
    { id: "2", name: "orange 🍊", color: "orange" },
    { id: "3", name: "apple 🍎", color: "red" },
    { id: "4", name: "raspberry ", color: "pink" },
    { id: "5", name: "blueberry 🫐", color: "blue" },
    { id: "6", name: "banana 🍌", color: "yellow" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
