import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [allLights, setAllLights] = useState([
    { id: 1, name: "Living Room", isOn: false },
    { id: 1, name: "Kitchen", isOn: false },
    { id: 1, name: "Bedroom", isOn: false },
    { id: 1, name: "Bathroom", isOn: false },
    { id: 1, name: "Garage", isOn: false },
    { id: 1, name: "Porch", isOn: false },
    { id: 1, name: "Garden", isOn: false },
    { id: 1, name: "Office", isOn: false },
  ]);

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} allLights={allLights} />
    </Layout>
  );
}
