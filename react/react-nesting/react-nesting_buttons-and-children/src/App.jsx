import "./App.css";

export default function App() {
  return (
    <main>
      <Button>Click</Button>
      <Button>Not Click</Button>
      <Button>Maybe Click</Button>
      <Button>Dont think about</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
