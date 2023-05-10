import { createContext, useContext, useState } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

//Custom HOOk

export const useAppContext = () => useContext(NavbarContext);

const NavBar = () => {
  const [user, setUser] = useState({ name: "Anonymous" });
  const logout = () => {
    setUser(null);
  };

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <div className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </div>
    </NavbarContext.Provider>
  );
};

export default NavBar;
