import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Avatar } from '../../components/Avatar';

import useFetchData from '../../hooks/useData';

// const ENDPOINT = "https://6407a83c8ee73db92e2eea2f.mockapi.io/api/v1/Noticias";
const Noticias = () => {
  const ENDPOINT = 'https://6407a83c8ee73db92e2eea2f.mockapi.io/api/v1/Noticias';
  const { data, error, isLoading } = useFetchData(ENDPOINT);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // if (data)
  return (
    <>
      Noticias
      <UlTag>
        {data &&
          data?.map((item) => (
            <LiTag key={item.id}>
              {item.title}
              <Avatar imagen={item.avatar} />

              <Link to={`/noticias/` + item.id}>
                <img src={item.imagen} />
              </Link>
              <a href={item.link}>{item.link}</a>
            </LiTag>
          ))}
      </UlTag>
    </>
  );
};

const UlTag = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;
const LiTag = styled.li`
  border: 1px solid red;
  padding: 1rem;
`;

export default Noticias;
