import type { Author } from "@/types/Product";
import Link from "next/link";

async function getAuthor() {
  const author_res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/author`);
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
              <Link href="https://github.com/Stroik/meli" target="_blank">
                Repositorio
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/augusto-marinaro/"
                target="_blank"
              >
                Linkedin
              </Link>
            </li>
            <li>
              <Link href="mailto:marinaro.augusto@gmail.com" target="_blank">
                Email
              </Link>
            </li>
            <li>
              <Link href="https://marinaroaugusto.com.ar" target="_blank">
                Web
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
