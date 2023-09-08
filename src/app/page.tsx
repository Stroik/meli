import type { Author } from "@/types/Product";
import Link from "next/link";

async function getAuthor() {
  const author_res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/author`, {
    cache: "no-store",
  });
  const author_data = await author_res.json();

  return author_data;
}

export default async function Home() {
  const author: Author = await getAuthor();
  return (
    <section className="home">
      <div className="box">
        <h1>Test práctico - Frontend</h1>
        <h2>
          {author.name} {author.lastname}
        </h2>
        <div className="info">
          <ul>
            <li>
              <Link href="#">Repositorio</Link>
            </li>
            <li>
              <Link href="#">Linkedin</Link>
            </li>
            <li>
              <Link href="#">Email</Link>
            </li>
            <li>
              <Link href="#">Web</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
