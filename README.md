4 · Polish & interactivity
Feature	Package / snippet
Dark-mode toggle	npx astro add theme or custom script storing prefers-color-scheme
Math (LaTeX)	npm i rehype-katex katex → add with remarkMath / rehypeKatex
Syntax highlighting	npx astro add mdx then npm i rehype-prism-plus
Comments on blog	giscus.app – lightweight GitHub Discussions widget
Search	Client-side Fuse.js JSON index (under 5 kB) or Algolia DocSearch
Open-Graph images	GitHub Action with Satori & Resvg to generate og.png per post
Analytics	Simple: Plausible script; Complex: Google Analytics v4
Contact form	<form action="https://formspree.io/f/{id}" method="POST"> — no backend
5 · Production-grade extras
Custom domain + HTTPS

Add your domain in Settings → Pages (CNAME file auto-created)

Create A/AAAA or CNAME records at your registrar.

Perf & Lighthouse

bash
Code kopiëren
npx @11ty/eleventy-plugin-webcpa audit https://alexanderakm.github.io
Fix any CLS or LCP warnings.

CI niceties

Add branch-preview workflow to deploy PRs to a random URL.

Enable Dependabot for npm updates.

Accessibility

Run npx astro add a11y (axe-core in dev overlay).

Provide alt on every image.

SEO basics

npx astro add sitemap & npx astro add rss.

<meta name="description" …> per page, canonical URLs.

6 · Content pipeline (future-proof)
When you’re ready to connect Obsidian or academic BibTeX:

Use the obsidian-export CLI to dump Markdown into src/content/notes.

Parse a references.bib with a tiny script to JSON and render via a Publications component.

7 · Weekly workflow
bash
Code kopiëren
# 1. write a post
cd src/content/blog
cp _template.md 2025-05-04-new-idea.md
# 2. run local preview
npm run dev
# 3. commit & push
git add .
git commit -m "Post: New idea on vision transformers"
git push   # site auto-updates in ~30 s
You now have a clear path
Define collections → 2. Build layouts & nav → 3. Migrate projects/blog posts → 4. Add polish (dark-mode, math, search) → 5. Set custom domain & analytics.

Take it step by step; every push gives you a visible win.
Ping me whenever you hit a bump or want design feedback—happy building!















Chat



# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

