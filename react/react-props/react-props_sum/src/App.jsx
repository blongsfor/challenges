import "./App.css";

export default function App() {
  return <Sum valueA={8} valueB={2} />;
}

function Sum({ valueA, valueB }) {
  return (
    <h1>
      {valueA} + {valueB} = {valueA + valueB}
    </h1>
  );
}
