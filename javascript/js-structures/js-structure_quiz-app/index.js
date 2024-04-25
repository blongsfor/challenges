import { Header } from "./components/Header/Header.js";
import { Form } from "./components/Form/Form.js";
import { Card, CardList } from "./components/Card/Card.js";
import { Bookmark } from "./components/Bookmark/Bookmark.js";
import { App } from "./components/App/App.js";

// Store the cards in a global state

// To prevent the need to rerender, we add the new card to the DOM directly

// ----------------------------------------------------------------
// The render function renders the app to the DOM
const header = Header();
const form = Form();
const cardList = CardList();

function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
