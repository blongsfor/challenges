import "./Card.css";

export default function Card({ name, id, color }) {
  return (
    <div className="fruitcard">
      <p className="card">{name} </p>
      <span className="fruit-id">{id}</span>
      <p className="color">{color}</p>
    </div>
  );
}
