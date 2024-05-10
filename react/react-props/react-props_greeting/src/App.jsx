import "./App.css";

export default function App() {
  return <Greeting name={"Björn"} />;
}

function Greeting({ name }) {
  return <h1>Hello {name}!</h1>;
}
