import { useState } from "react";
import { HeaderLogo } from "./HardData/Logos";

const Header = () => {
  let pokebtnName = "login";
  const [btnName, setbtnName] = useState(pokebtnName);
console.log("header rendered")
  return (
    <div className="head">
      <div className="poke-logo">
        <img className="logo" src={HeaderLogo}></img>
      </div>
      <div className="menu">
        <ul className="list">
          <li>Home</li>
          <li>poke-dex</li>
          <li>characters</li>
          <button
            className="react-btnName"
            onClick={() => {
             btnName == "login" ? setbtnName("logout"):setbtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
