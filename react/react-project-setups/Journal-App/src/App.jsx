import "./App.css";
import { Header } from "./components/Header/Header.1.jsx";
import { Footer } from "./components/Footer/footer.jsx";
import { EntryForm } from "./components/Entry-Form/entry-form.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <EntryForm />
      <Footer></Footer>
    </>
  );
}

export default App;
