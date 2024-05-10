import logo from "../assets/logo.jpg";
import { Image } from "./Image.jsx";

export function Logo() {
  return (
    <a href="#">
      <Image src={logo} alt="logo" />
    </a>
  );
}
