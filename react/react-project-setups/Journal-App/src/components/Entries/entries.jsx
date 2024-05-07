import { Tabs } from "../Tabs/tabs";
import { Entrylist } from "../Entrylist/entrylist";

export function Entries() {
  return (
    <>
      <section>
        <Tabs></Tabs>
        <Entrylist></Entrylist>
        <Entrylist></Entrylist>
        <Entrylist></Entrylist>
      </section>
    </>
  );
}
