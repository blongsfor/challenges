import "./App.css";

export default function App() {
  return <Button text="test" color={"#FF0000"} disabled={false} />;
}

function Button({ color, disabled, text }) {
  return (
    <button
      style={{
        height: "100px",
        width: "200px",
        color: color,
      }}
    >
      {text} {disabled}
    </button>
  );
}
