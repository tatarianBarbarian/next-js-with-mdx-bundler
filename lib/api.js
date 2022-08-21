const post1 = `---
title: Sample Post 1
---

import {Counter} from './components/Counter.jsx'

# {frontmatter.title}

Hello from MDX content!

Imported component:

<Counter />
`;

const post2 = `---
title: Sample Post Two
---

# {frontmatter.title}

Hello from MDX content!`;

const post3 = `---
title: Sample Post III
---

# {frontmatter.title}

Hello from MDX content!`;

const posts = [
  {
    slug: "sample-post-1",
    content: post1,
  },
  {
    slug: "sample-post-two",
    content: post2,
  },
  {
    slug: "sample-post-III",
    content: post3,
  },
];

export const getPostsSlugs = async () => {
  return posts.map((p) => p.slug);
};

export const getRawPost = async (slug) =>
  posts.find((p) => p.slug === slug).content;
