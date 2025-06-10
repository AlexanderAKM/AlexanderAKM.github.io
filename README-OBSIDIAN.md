# Importing Obsidian Writing Posts to Your Astro Website

This guide explains how to import your Obsidian Markdown notes as writing posts on your Astro website.

## Overview

The script `scripts/obsidian-to-astro.js` converts your Obsidian markdown files to Astro-compatible markdown files with proper frontmatter. It handles:

- Converting Obsidian frontmatter to Astro frontmatter
- Processing internal links
- Copying and processing images
- Converting callouts to HTML

## Setup

1. **Install dependencies**:
   ```bash
   npm run setup:converter
   ```

2. **Update the script configuration**:
   Open `scripts/obsidian-to-astro.js` and update the `OBSIDIAN_VAULT_PATH` to point to your Obsidian vault.

## Usage

Run the converter with:

```bash
npm run convert:obsidian -- --folder "path/to/your/obsidian/vault"
```

Or add a custom script to your `package.json`:

```json
"scripts": {
  "convert:writing": "node scripts/obsidian-to-astro.js --folder C:/Path/To/Obsidian/Vault/Writing"
}
```

## Conversion Process

The script performs the following conversions:

1. **Frontmatter**:
   ```yaml
   ---
   title: "Your Post Title"
   pubDate: 2024-01-01
   tags: ["Category"]
   draft: false
   ---
   ```

2. **Internal Links**:
   - Obsidian internal links `[[Page Name]]` → `[Page Name](/writing/page-name)`

3. **Images**:
   - Obsidian image syntax `![[image.jpg]]` → `![Alt text](/images/image.jpg)`
   - Images are copied to `public/images/`

4. **Callouts**:
   - Obsidian callouts are converted to HTML with appropriate styling

## Troubleshooting

Common issues:

1. **Missing images** - Ensure your Obsidian vault has an Attachments folder
2. **Broken links** to non-existent writing posts
3. **Frontmatter issues** - Check that your Obsidian frontmatter is properly formatted

## Manual Process

If the automated process doesn't work for your needs, you can manually convert your Obsidian notes:

1. Copy the content from your Obsidian note
2. Create a new file in `src/content/writing/your-post-title.md`
3. Add the required frontmatter
4. Fix internal links and image references
5. Convert callouts to HTML

## Tips

- Use consistent naming conventions in your Obsidian vault
- Keep your writing posts organized in a dedicated folder
- Use tags to categorize your posts
- Test your converted posts locally before publishing

## Preview

To preview your site with the converted writing posts:

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:4321/writing` to see your writing posts. 