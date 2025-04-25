# Importing Obsidian Blog Posts to Your Astro Website

This guide explains how to import your Obsidian Markdown notes as blog posts on your Astro website.

## Setup

1. **Install dependencies**:
   ```bash
   npm run setup:converter
   ```

2. **Configure the converter**:
   Open `scripts/obsidian-to-astro.js` and update the `OBSIDIAN_VAULT_PATH` variable to point to your Obsidian vault location.
   
   ```javascript
   const OBSIDIAN_VAULT_PATH = 'C:/Path/To/Your/Obsidian/Vault'; // Update this path
   ```
   
   If your Obsidian attachments folder has a different name, update the `ATTACHMENTS_FOLDER` variable:
   
   ```javascript
   const ATTACHMENTS_FOLDER = 'Attachments'; // Obsidian attachments folder name (change if needed)
   ```

## Usage

### Convert Specific Files

To convert specific Obsidian markdown files:

```bash
npm run convert:obsidian -- path/to/your/note.md path/to/another/note.md
```

### Convert All Files in a Folder

To convert all markdown files in a specific folder:

```bash
npm run convert:obsidian -- --folder path/to/folder
```

### Convert All Files in the Vault

To convert all markdown files in your Obsidian vault:

```bash
npm run convert:obsidian -- --all
```

## What the Converter Does

The converter automates the following tasks:

1. **Adds required frontmatter** for Astro (title, pubDate, tags, draft)
2. **Converts Obsidian syntax** to standard Markdown:
   - Obsidian image links `![[image.jpg]]` → `![](/images/image.jpg)`
   - Obsidian internal links `[[Page Name]]` → `[Page Name](/blog/page-name)`
   - Obsidian callouts/admonitions to HTML divs
3. **Copies images** from your Obsidian vault to the website's public images folder

## Manual Adjustments You Might Need

After conversion, you might still need to check for:

1. **Additional Obsidian-specific syntax** that wasn't handled by the converter
2. **Broken links** to non-existent blog posts
3. **Image formatting** issues
4. **Complex embeds** or custom Obsidian plugin content

## Troubleshooting

- **Missing images**: Make sure your images are in the main vault folder or in the Attachments folder
- **Conversion errors**: Check the terminal output for error messages
- **Formatting issues**: You might need to manually adjust some complex formatting

## Adding a Custom Script to package.json

If you want to add a specific shortcut for a commonly used folder, you can add a custom script to your package.json:

```json
"scripts": {
  "convert:blog": "node scripts/obsidian-to-astro.js --folder C:/Path/To/Obsidian/Vault/Blog"
}
``` 