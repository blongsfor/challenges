import "./Card.css";

export default function Card({ name, id, color }) {
  return (
    <div className="fruitcard" style={{ backgroundColor: color }}>
      <p className="card">{name}</p>
      <span className="fruit-id">{id}</span>
    </div>
  );
}
