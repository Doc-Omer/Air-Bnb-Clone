// import react from "React";
import airbnb from "../assets/airbnb-logo.png";
import "../App.css";

export default function Navbar() {
  return (
    <nav>
      <img className="header-img" src={airbnb}></img>
    </nav>
  );
}
