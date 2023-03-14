import React from 'react';
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

  console.log('que es data desde noticias ', data);
  return (
    <>
      Noticias
      <UlTag>
        {data &&
          data?.map((item) => (
            <LiTag key={item.id}>
              <Link to={`/noticias/` + item.id}>
                <FigureTag>
                  <img src={item.imagen} alt="Texto descriptivo" />
                  {item.title}
                  <figcaption>{item.texto}.</figcaption>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0.5rem',
                      gap: '0.3rem',
                    }}
                  >
                    <Avatar imagen={item.avatar} /> <a href={item.link}>{item.link}</a>
                  </div>
                </FigureTag>
              </Link>
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
  grid-template-columns: 1fr;
  gap: 1rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  @media (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const LiTag = styled.li`
  padding: 1rem;
`;
const FigureTag = styled.figure`
  border: 1px solid var(--rojo);
`;

export default Noticias;
