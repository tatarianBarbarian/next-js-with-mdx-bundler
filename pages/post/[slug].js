import { getRawPost } from "../../lib/api";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export async function getServerSideProps({ params }) {
  const rawMDX = await getRawPost(params.slug);

  const { frontmatter, code } = await bundleMDX({
    source: rawMDX,
    cwd: process.cwd(),
  });

  return {
    props: {
      mdxSerialized: code,
      frontmatter,
    },
  };
}

const customComponents = {
  h1: (props) => (
    <h1 {...props} style={{ fontStyle: "italic", color: "red" }} />
  ),
};

export default function PostPage({ mdxSerialized, frontmatter }) {
  const Component = React.useMemo(
    () => getMDXComponent(mdxSerialized),
    [mdxSerialized]
  );

  return (
    <div>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <Component components={customComponents} />
      <br />
      <br />
      <div>
        <Link href="/">
          <a>Go back</a>
        </Link>
      </div>
    </div>
  );
}
