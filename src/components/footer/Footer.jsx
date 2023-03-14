import React, { useContext } from 'react';
import styled from 'styled-components';

import { UserContextProvider } from '../../contexts/userContext';

const Footer = () => {
  const { data } = useContext(UserContextProvider);
  return <FooterTag>Footer de {data.nombre}</FooterTag>;
};

const FooterTag = styled.footer`
  margin-top: auto;
`;

export default Footer;
