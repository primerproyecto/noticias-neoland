import React from 'react';

import useFetchData from '../../hooks/useData';

const Deportes = () => {
  const ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/1/comments';
  const { data, error, isLoading } = useFetchData(ENDPOINT);
  console.log(data);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // if (data)
  return (
    <>
      Noticias
      <ul>{data && data?.map((item) => <li key={item.id}>{item.name}</li>)}</ul>
    </>
  );
};

export default Deportes;
