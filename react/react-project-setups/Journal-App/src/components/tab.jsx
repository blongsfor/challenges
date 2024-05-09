export function Tab({ tabname, counter }) {
  return (
    <>
      <h3>{tabname}</h3>
      <span className="count-number">{counter}</span>
    </>
  );
}
