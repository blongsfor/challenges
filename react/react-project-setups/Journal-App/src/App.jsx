import "./App.css";
import { Header } from "./components/header";
import { EntryForm } from "./components/entry-form";
import { EntriesSection } from "./components/entries-section";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <EntryForm />
      <EntriesSection />
      <Footer />
    </>
  );
}

export default App;
