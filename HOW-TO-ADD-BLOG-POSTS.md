# Adding Blog Posts from Obsidian

This guide explains the simple manual process to add your Obsidian markdown files as blog posts.

## Simple Manual Process

1. **Copy your Obsidian content** and paste it into a new file in `src/content/blog/your-post-title.md`

2. **Add the required frontmatter** at the top of the file:
   ```md
   ---
   title: "Your Blog Post Title"
   pubDate: 2023-12-01T00:00:00Z
   tags: ["AI Alignment", "Interpretability", "Computational Neuroscience"]
   draft: false
   ---
   ```

3. **Fix image references**:
   - Change Obsidian syntax `![[image.jpg]]` to `![Alt text](/images/image.jpg)`
   - Copy the images to `public/images/` folder

4. **Fix internal links**:
   - Change Obsidian links `[[Note Name]]` to `[Note Name](/blog/note-name)`

5. **Fix callouts**:
   ```md
   > [!NOTE]
   > This is a note callout from Obsidian
   ```
   Becomes:
   ```html
   <div class="callout callout-note">
   This is a note callout from Obsidian
   </div>
   ```

## Template Post

I've added a template post at `src/content/blog/TEMPLATE-POST.md` that you can duplicate and modify.

## Available Callout Types

- `callout-note`: Blue background
- `callout-info`, `callout-todo`: Sky blue background
- `callout-tip`, `callout-hint`, `callout-important`: Green background
- `callout-warning`, `callout-caution`: Amber background
- `callout-danger`, `callout-error`: Red background
- `callout-question`: Purple background
- `callout-quote`, `callout-cite`: Gray background
- `callout-success`, `callout-check`, `callout-done`: Emerald background
- `callout-fail`, `callout-failure`, `callout-missing`: Rose background
- `callout-bug`: Red background
- `callout-example`: Indigo background

## Testing Your Posts

Run the website locally to preview your posts:
```bash
npm run dev
```

Visit `http://localhost:4321/blog` to see your blog posts.

## Publishing

When you're ready to publish, commit and push your changes. If your `draft` is set to `false`, the post will be published; if `true`, it will only be visible in development mode. 