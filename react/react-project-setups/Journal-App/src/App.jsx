import "./App.css";

import { Footer } from "./components/Footer/footer.jsx";
import { EntryForm } from "./components/Entry-Form/entry-form.jsx";
import { Header } from "./components/Header/header.jsx";
import { Entries } from "./components/Entries/entries.jsx";

function App() {
  return (
    <>
      <Header />
      <EntryForm />
      <Entries></Entries>
      <Footer></Footer>
    </>
  );
}

export default App;
