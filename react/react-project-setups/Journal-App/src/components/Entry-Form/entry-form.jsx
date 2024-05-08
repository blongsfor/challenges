export function EntryForm() {
  return (
    <>
      <label htmlFor="entry-form__title">Motto</label>
      <input className="entry-form" inputMode="text"></input>
      <label htmlFor="text-area__title">Notes</label>
      <textarea className="text-area__notes"></textarea>
      <button className="submit_Button"></button>;
    </>
  );
}
