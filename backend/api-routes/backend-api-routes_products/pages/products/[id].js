import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(id ? `/api/products/${id}` : null, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Product Details</h1>
      <p>ID: {data.id}</p>
      <p>Name: {data.name}</p>
      <p>Price: {data.price}</p>
      <p>Description: {data.description}</p>
    </div>
  );
}
