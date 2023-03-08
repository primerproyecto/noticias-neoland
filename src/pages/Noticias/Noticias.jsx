import React from "react";
import useUser from "../../hooks/useData";

// const ENDPOINT = "https://6407a83c8ee73db92e2eea2f.mockapi.io/api/v1/Noticias";
const Noticias = () => {
  const { data, error, isLoading } = useUser();
  console.log(data);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // if (data)
  return (
    <div>
      Noticias
      {data && data?.map((item) => <li key={item.id}>{item.title}</li>)}
    </div>
  );
};

export default Noticias;
