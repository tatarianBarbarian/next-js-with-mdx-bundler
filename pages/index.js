import { getPostsSlugs } from "../lib/api";
import Link from "next/link";

export async function getStaticProps() {
  const postsSlugs = await getPostsSlugs();

  return {
    props: {
      postsSlugs,
    },
  };
}

export default function Home({ postsSlugs }) {
  return (
    <>
      <h1>Next.js with mdx-bundler</h1>
      <ul>
        {postsSlugs.map((s) => (
          <li key={s}>
            <Link href="/post/[slug]" as={`/post/${s}`} passHref>
              <a>{s}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
