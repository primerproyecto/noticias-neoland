import useSWR from "swr";
function useUser() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://6407a83c8ee73db92e2eea2f.mockapi.io/api/v1/Noticias",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log("que es data desde el hook", data);

  return { data };
}
export default useUser;
