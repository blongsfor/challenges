import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ allOn, allOff }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions allOn={allOn} allOff={allOff} />
    </>
  );
}
