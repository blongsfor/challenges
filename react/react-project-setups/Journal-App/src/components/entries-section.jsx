import { Tab } from "./tab.jsx";
import { Entry } from "./entry.jsx";

export function EntriesSection() {
  return (
    <>
      <section className="tab-bar__section">
        <Tab tabname={"All Entries"} counter={"3"}></Tab>
        <Tab tabname={"Favorites"} counter={"1"}></Tab>
      </section>
      <section className="entry-list">
        <Entry
          date={"2.3.1943"}
          title={"Test"}
          text={"Test test test und noch mehr Test"}
        ></Entry>
        <Entry
          date={"3.3.1965"}
          title={"Test"}
          text={"Test test test und noch mehr Test"}
        ></Entry>
        <Entry
          date={"3.9.2023"}
          title={"Test"}
          text={"Test test test und noch mehr Test"}
        ></Entry>
      </section>
    </>
  );
}
