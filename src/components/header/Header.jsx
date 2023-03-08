import React from "react";
import { NavLink } from "react-router-dom";

import { Home } from "react-feather";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderTag>
      <NavLink to="/">
        {" "}
        <Home /> Home
      </NavLink>
      <nav>
        <Ul>
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
        </Ul>
      </nav>
    </HeaderTag>
  );
};

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  li {
    padding-left: 1rem
  }
`;
const HeaderTag = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
  }
  padding: 12px;
`;

const Enlace = styled(NavLink)`
border: 1px solid red;
`

export default Header;
