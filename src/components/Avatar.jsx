import React from 'react';

import styled from 'styled-components';

export const Avatar = (imagen) => {
  return <img src={imagen} alt="" />;
};

const AvatarImg = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  object-fit: contain;
`;
