# Adding Writing Posts from Obsidian

This guide explains the simple manual process to add your Obsidian markdown files as writing posts.

## Manual Process

1. **Copy your Obsidian content** and paste it into a new file in `src/content/writing/your-post-title.md`

2. **Add frontmatter** at the top of the file:
   ```yaml
   ---
   title: "Your Writing Post Title"
   pubDate: 2024-01-01
   tags: ["Category"]
   draft: false
   ---
   ```

3. **Format your content**:
   - Use markdown for formatting
   - Add images to the `public/images` directory and reference them with `/images/filename.jpg`
   - Use BibTeX for citations (see template for examples)

4. **Test your post**:
   - Run `npm run dev` to start the development server
   - Visit `http://localhost:4321/writing` to see your writing posts

## Automated Process

I've created a script to automate this process. To use it:

1. **Install dependencies**:
   ```bash
   npm run setup:converter
   ```

2. **Run the converter**:
   ```bash
   npm run convert:obsidian -- --folder "path/to/your/obsidian/vault"
   ```

The script will:
- Convert Obsidian markdown to Astro-compatible markdown
- Add proper frontmatter
- Handle internal links and images
- Place the converted files in the correct directory

## Template

I've added a template post at `src/content/writing/_template.md` that you can duplicate and modify.

## Tips

- Use the template as a starting point
- Keep your writing posts organized in the `src/content/writing/` directory
- Use descriptive filenames that reflect the content
- Add appropriate tags to help with categorization
- Use BibTeX for citations to maintain academic standards

## Preview

To preview your site with the new writing post:

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:4321/writing` to see your writing posts. 