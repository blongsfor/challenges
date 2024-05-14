import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./App.css";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [rolls, setRolls] = useLocalStorageState("rolls", {
    defaultValue: [],
  });

  return (
    <div className="app">
      <main className="app__main">
        <D6Button />
      </main>
      <aside className="app__aside">
        <History rolls={[]} />
      </aside>
    </div>
  );
}
