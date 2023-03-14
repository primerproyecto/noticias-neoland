import React from 'react';

import useFetchData from '../../hooks/useData';

const Tecnologia = () => {
  const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/ditto';
  const { data, error, isLoading } = useFetchData(ENDPOINT);
  console.log('que es data en ', data);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // if (data)
  return <>Noticias</>;
};

export default Tecnologia;
