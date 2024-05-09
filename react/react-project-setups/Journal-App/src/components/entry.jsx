export function Entry({ date, title, text }) {
  return (
    <>
      <date>{date}</date>
      <h3 className="entry-titel">{title}</h3>
      <p className="entry-text">{text}</p>
    </>
  );
}
