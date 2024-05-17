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
          <li>
            {volumes.map((volume) => {
              return (
                <>
                  <Link href={`./volumes/${volume.slug}`} key={volume.slug}>
                    <div>
                      <Image
                        src={`${volume.cover}`}
                        alt={volume.title}
                        width={326}
                        height={450}
                      />
                      <h3>{volume.title}</h3>
                    </div>
                  </Link>
                </>
              );
            })}
          </li>
        </ul>
      </div>
    </>
  );
}
