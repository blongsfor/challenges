import "./App.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Futurama is the best</h2>
      <label id="label" htmlFor="empty">
        Futurama everywhere
      </label>
      <input id="input" type="text"></input>
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/Futurama"
      >
        get to know more about Futurama
      </a>
    </article>
  );
}
