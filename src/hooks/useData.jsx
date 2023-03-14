import useSWR from 'swr';
function useFetchData(ENDPOINT) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(ENDPOINT, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return { data };
}
export default useFetchData;
