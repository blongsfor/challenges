export function Entrylist(title, date, text) {
  return (
    <>
      <h4 className="entrylist-title">{title}</h4>
      <date className="entrylist-date">{date}</date>
      <p className="entrylist-text">{text}</p>
      <favicon></favicon>
    </>
  );
}
