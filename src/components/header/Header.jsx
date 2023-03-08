import React from "react";
import { NavLink } from "react-router-dom";

import { Home } from "react-feather";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              {" "}
              <Home /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/noticias">Noticias</NavLink>
          </li>
          <li>
            <NavLink to="/deportes">Deportes</NavLink>
          </li>
          <li>
            <NavLink to="/tecnologia">Tecnologia</NavLink>
          </li>
          <li>
            <NavLink to="/economia">Economia</NavLink>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
