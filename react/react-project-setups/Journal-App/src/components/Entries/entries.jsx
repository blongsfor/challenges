import { Tab } from "../Tab/tab";
import { Entrylist } from "../Entrylist/entrylist";

export function Entries() {
  return (
    <>
      <section>
        <Tab tabname="All Entries"></Tab>
        <Tab tabname="Favorites"></Tab>
        <Entrylist
          entrylist-title="test"
          entrylist-date="24.3.03"
          entrylist-text="test"
        ></Entrylist>
      </section>
    </>
  );
}
