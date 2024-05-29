import useSWR from "swr";

export default function AllListingsPage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR("../api/products", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      {data.map((product) => (
        <li key={product.id}>
          <p>{product.name}</p>
          <p>{product.description}</p>
        </li>
      ))}
    </>
  );
}
