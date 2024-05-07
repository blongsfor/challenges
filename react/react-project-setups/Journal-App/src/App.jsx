import "./App.css";

import { Footer } from "./components/Footer/footer.jsx";
import { EntryForm } from "./components/Entry-Form/entry-form.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Entries } from "./components/Entries/entries.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <EntryForm />
      <Entries></Entries>
      <Footer></Footer>
    </>
  );
}

export default App;
