import "./App.css";

export default function App() {
  function handleClick() {
    console.log("Dont touch me");
  }
  return (
    <Button
      text="test"
      color={"#FF0000"}
      disabled={false}
      onClick={handleClick}
    />
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      style={{
        height: "100px",
        width: "200px",
        color: color,
      }}
      onClick={onClick}
    >
      {text} {disabled}
    </button>
  );
}
