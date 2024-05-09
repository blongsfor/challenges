export function Tab({ tabname, counter }) {
  return (
    <>
      <div className="tab">
        <h3>{tabname}</h3>
        <span className="count-number">{counter}</span>
      </div>
    </>
  );
}
