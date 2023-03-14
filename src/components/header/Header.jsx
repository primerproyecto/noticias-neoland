import React from 'react';
import { Home } from 'react-feather';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

/* import { UserContextProvider } from '../../contexts/userContext'; */
import Switcher from '../switcher/Switcher';

const Header = () => {
  /* const { data } = useContext(UserContextProvider); */
  return (
    <HeaderTag>
      <NavLink to="/">
        {' '}
        <Home />
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
            <Switcher />
          </li>
        </Ul>
      </nav>
    </HeaderTag>
  );
};

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
  li {
    padding-left: 1rem;
  }
`;
const HeaderTag = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  > a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
  }
  padding: 1rem;
  @media (min-width: 400px) {
    flex-direction: column;
  }
`;

export default Header;
