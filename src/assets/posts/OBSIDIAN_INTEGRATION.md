# Integrating Your Obsidian Blog Posts into Your Astro Website

This guide explains how to import and use your existing Obsidian Markdown notes as blog posts on your website.

## Steps to Integrate Obsidian Blog Posts

### 1. Prepare Your Obsidian Files

Obsidian Markdown files need to have the proper frontmatter to work with Astro content collections. Each blog post should have the following at the top:

```md
---
title: "Your Post Title"
pubDate: YYYY-MM-DDT00:00:00Z
tags: ["tag1", "tag2"]
draft: false
---
```

### 2. Copy Your Obsidian Files

Copy your Obsidian blog posts to the `src/content/blog/` directory. This is where Astro looks for blog content.

### 3. Fix Image References

Obsidian uses its own format for image references. You'll need to adjust them to work with Astro:

#### Obsidian Format:
```md
![[image-name.jpg]]
```

#### Astro Format:
```md
![Alt text](/path/to/images/image-name.jpg)
```

For images, you have two options:

A. **Static Images**: Place images in the `public/images/` folder and reference them as `/images/image-name.jpg`

B. **Optimized Images**: Use the Astro image component by placing images in `src/images/` and importing them in your component.

### 4. Handle Obsidian-Specific Syntax

- **Internal Links**: Replace `[[Note Name]]` with regular Markdown links `[Note Name](/blog/note-name)`
- **Callouts**: Convert to regular Markdown blockquotes or custom components
- **Embeds**: Replace with standard content or create custom components

### 5. Create a Script to Automate This Process

You could create a script that automatically:
- Copies files from your Obsidian vault to the blog directory
- Transforms Obsidian-specific syntax to standard Markdown
- Fixes frontmatter if needed
- Moves images to the appropriate location

## Example Script Approach

Here's a high-level approach for a script (you would implement this in Node.js):

1. Read files from your Obsidian vault directory
2. Parse the Markdown and frontmatter
3. Transform Obsidian-specific syntax
4. Write the transformed files to `src/content/blog/`
5. Copy any referenced images to the appropriate location

## Manual Process for Now

Until you have a script, you can:

1. Copy your Obsidian Markdown file
2. Add the proper frontmatter if not already present
3. Check for and replace any Obsidian-specific syntax
4. Save it to `src/content/blog/[your-filename].md`
5. Copy any images to the public folder

## Next Steps

Let me know if you want help:
1. Creating a script to automate this process
2. Converting a specific blog post as an example
3. Setting up a custom component to handle Obsidian-specific features 