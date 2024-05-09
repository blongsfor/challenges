export function EntryForm() {
  return (
    <>
      <h2>New Entry</h2>
      <form className="entry-form">
        <div className="input-text__div">
          <label htmlFor="input-text__title">Motto</label>
          <input id="input-text" name="input-text" required></input>
        </div>
        <div className="input-notes__div">
          <label htmlFor="input-notes__title">Notes</label>
          <textarea id="input-notes" name="notes" rows="15" required></textarea>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
