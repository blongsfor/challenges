import Link from "../components/Link";
import Lights from "../components/Lights/Lights";

export default function Rooms({ allLights, onToggle }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>All Lights</h1>
      {/* <Lights lights={allLights} toggleLight={toggleLight} /> */}
      <Lights lights={allLights} onToggle={onToggle} />
    </>
  );
}
