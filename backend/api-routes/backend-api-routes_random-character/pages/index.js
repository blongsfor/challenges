import useSWR from "swr";

export default function HomePage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/random-characters", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <p>{data.firstName}</p>
      <p>{data.lastName}</p>
      <p>{data.geoHash}</p>
      <p>{data.twittername}</p>
    </>
  );
}
