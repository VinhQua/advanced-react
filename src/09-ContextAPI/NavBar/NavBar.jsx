import { useState } from "react";
import NavLinks from "./NavLinks";

const NavBar = () => {
  const [user, setUser] = useState({ name: "Anonymous" });
  const logout = () => {
    setUser(null);
  };

  return (
    <div className="navbar">
      <h5>CONTEXT API</h5>
      <NavLinks />
    </div>
  );
};

export default NavBar;
