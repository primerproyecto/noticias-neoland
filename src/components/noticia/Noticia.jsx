import React from 'react';
import { useParams } from 'react-router-dom';

import useFetchData from '../../hooks/useData';

const Noticia = () => {
  const ENDPOINT = 'https://6407a83c8ee73db92e2eea2f.mockapi.io/api/v1/Noticias';
  const { data, error, isLoading } = useFetchData(ENDPOINT);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const params = useParams();

  const resultado = data?.filter((item) => item.id == params.id);
  console.log('y que es resultado', resultado);
  return (
    <div>
      <img src={resultado[0].imagen} />
    </div>
  );
};

export default Noticia;
