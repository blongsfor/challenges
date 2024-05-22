import GlobalStyle from "../styles";
import Layout from "../components/Layout";

const allLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 1, name: "Kitchen", isOn: false },
  { id: 1, name: "Bedroom", isOn: false },
  { id: 1, name: "Bathroom", isOn: false },
  { id: 1, name: "Garage", isOn: false },
  { id: 1, name: "Porch", isOn: false },
  { id: 1, name: "Garden", isOn: false },
  { id: 1, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}
