import React from 'react';
import styled from 'styled-components';

export const Avatar = ({ imagen }) => {
  return <Imagen src={imagen} alt="" />;
};

const Imagen = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 2px solid var(--azul);
`;
