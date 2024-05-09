import "./App.css";
import { Header } from "./components/header";
import { EntryForm } from "./components/entry-form";
import { EntriesSection } from "./components/entries-section";

function App() {
  return (
    <>
      <Header />
      <EntryForm />
      <EntriesSection />
    </>
  );
}

export default App;
