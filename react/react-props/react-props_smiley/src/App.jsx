import "./App.css";

export default function App() {
  return <Smiley isHappy={true} />;
}

function Smiley({ isHappy }) {
  return <h1>{isHappy ? <span>:)</span> : <span>:(</span>}</h1>;
}
