import "./Card.css";

export default function Card({ name, id, color }) {
  return (
    <div className="fruitcard">
      <p className="card" style={{ backgroundColor: color }}>
        {name}
      </p>
      <span className="fruit-id">{id}</span>
    </div>
  );
}
