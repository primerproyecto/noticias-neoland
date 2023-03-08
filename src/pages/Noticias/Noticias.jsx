import React from "react";
import useUser from "../../hooks/useData";
import styled from 'styled-components'

// const ENDPOINT = "https://6407a83c8ee73db92e2eea2f.mockapi.io/api/v1/Noticias";
const Noticias = () => {
  const { data, error, isLoading } = useUser();
  console.log(data);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // if (data)
  return (
    <>
      Noticias
      <UlTag>
      {data && data?.map((item) => <LiTag key={item.id}>{item.title}</LiTag>)}
      </UlTag>
    </>
  );
};

const UlTag = styled.ul`
  list-style-type: none;
  padding:0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`
const LiTag = styled.li`
  border: 1px solid red;
  padding: 1rem;
`

export default Noticias;
