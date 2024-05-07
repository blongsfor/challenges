import "./App.css";
import { Header } from "./components/Header/header.jsx";
import { Footer } from "./components/Footer/footer.jsx";
import { EntryForm } from "./components/Entry-Form/entry-form.jsx";
import { TextArea } from "./components/TextArea/text-area.jsx";
import { Button } from "./components/Button/button.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <label>Motto</label>
      <EntryForm />
      <label>Notes</label>
      <TextArea></TextArea>
      <Button></Button>
      <Footer></Footer>
    </>
  );
}

export default App;
