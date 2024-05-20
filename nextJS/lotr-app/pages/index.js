import { introduction } from "../resources/lib/data";
import Link from "next/link";
import { volumes } from "../resources/lib/data.js";
import Image from "next/image";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>The Lord of the Rings</title>
      </Head>
      <div>
        <h1>Lord of the Rings</h1>
        <p>{introduction}</p>
        <h2>All Volumes</h2>
        <ul>
          {volumes.map((volume) => {
            return (
              <>
                <Link href={`./volumes/${volume.slug}`} key={volume.slug}>
                  <li>
                    <h3>{volume.title}</h3>
                  </li>
                </Link>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
