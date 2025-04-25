# Personal Website

This is my personal portfolio website built with Astro, showcasing my projects, skills, and blog posts.

## 🚀 Project Structure

```text
/
├── public/              # Static assets like images and fonts
├── src/
│   ├── components/      # Reusable UI components
│   ├── content/         # Content collections (blog posts, projects)
│   ├── data/            # JSON/YAML data files
│   ├── images/          # Images processed by Astro
│   ├── layouts/         # Page layouts
│   ├── pages/           # Page components (routes)
│   └── styles/          # Global styles
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 🛠️ Technologies

- **Framework**: [Astro](https://astro.build/)
- **Styling**: TailwindCSS
- **Deployment**: GitHub Pages
- **Content**: Markdown/MDX

## 📝 Content Workflow

1. **Write a new blog post**:
   ```bash
   # Create a new post
   cp src/content/blog/_template.md src/content/blog/yyyy-mm-dd-title.md
   # Start local preview
   npm run dev
   ```

2. **Deploy changes**:
   ```bash
   git add .
   git commit -m "Add new blog post: Title"
   git push  # Site auto-updates via GitHub Actions
   ```

## ✨ Features

- ☀️/🌙 Dark mode toggle
- 📱 Responsive design
- 📊 Page analytics
- 🔍 Search functionality
- 💬 Contact form
- 📝 Blog with code syntax highlighting















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

