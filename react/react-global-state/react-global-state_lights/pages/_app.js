import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const inititalLights = [
    { id: 1, name: "Living Room", isOn: false },
    { id: 2, name: "Kitchen", isOn: false },
    { id: 3, name: "Bedroom", isOn: false },
    { id: 4, name: "Bathroom", isOn: false },
    { id: 5, name: "Garage", isOn: false },
    { id: 6, name: "Porch", isOn: false },
    { id: 7, name: "Garden", isOn: false },
    { id: 8, name: "Office", isOn: false },
  ];

  const [allLights, setAllLights] = useState(inititalLights);

  function handleToggle(id) {
    setAllLights((prevLights) =>
      prevLights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  const countLightsOn = allLights.filter(({ isOn }) => isOn).length;

  function allOn() {
    setAllLights((prevLights) =>
      prevLights.map((light) => ({ ...light, isOn: true }))
    );
  }

  function allOff() {
    setAllLights((prevLights) =>
      prevLights.map((light) => ({ ...light, isOn: false }))
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        allLights={allLights}
        onToggle={handleToggle}
        countLightsOn={countLightsOn}
        allOn={allOn}
        allOff={allOff}
      />
    </Layout>
  );
}
