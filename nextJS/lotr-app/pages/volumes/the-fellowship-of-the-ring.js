import Link from "next/link.js";
import { volumes } from "../../resources/lib/data.js";
import Image from "next/image.js";

const volume = volumes.find(
  ({ slug }) => slug === "the-fellowship-of-the-ring"
);

export default function fellowship() {
  return (
    <>
      <Link href="../">← All Volumes</Link>

      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => {
          return (
            <li key={book.title}>
              {book.ordinal}: {book.title}
            </li>
          );
        })}

        <Image
          src={`${volume.cover}`}
          alt={volume.title}
          width={140}
          height={230}
        />
        <Link href="the-two-towers">Next Book</Link>
      </ul>
    </>
  );
}
