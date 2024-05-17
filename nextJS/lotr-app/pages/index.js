import { introduction } from "../resources/lib/data";
import Link from "next/link";
import { volumes } from "../resources/lib/data.js";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          {volumes.map((volume) => {
            return (
              <>
                <Link href={volume.cover}>
                  <div>
                    <Image
                      src={`${volume.cover}`}
                      alt={volume.title}
                      width={450}
                      height={326}
                    />
                    <h3>{volume.title}</h3>
                  </div>
                </Link>
                <p>{volume.description}</p>
              </>
            );
          })}
        </li>
      </ul>
    </div>
  );
}
