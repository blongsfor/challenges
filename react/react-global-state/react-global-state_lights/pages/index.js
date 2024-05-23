import Link from "../components/Link";

export default function HomePage({ allLights, countLightsOn }) {
  const lightsOn = allLights.filter((light) => light.isOn === true);
  return (
    <div>
      <h1>Home</h1>
      <p>{countLightsOn} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
