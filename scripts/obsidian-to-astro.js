// Obsidian to Astro Writing Post Converter
const fs = require('fs-extra');
const path = require('path');
const matter = require('gray-matter');

// Configuration
const OBSIDIAN_VAULT_PATH = 'C:/Path/To/Your/Obsidian/Vault'; // Update this path
const WRITING_OUTPUT_PATH = path.join(__dirname, '../src/content/writing');
const IMAGE_OUTPUT_PATH = path.join(__dirname, '../public/images');
const ATTACHMENTS_FOLDER = 'Attachments'; // Obsidian attachments folder name (change if needed)

// Ensure directories exist
fs.ensureDirSync(WRITING_OUTPUT_PATH);
fs.ensureDirSync(IMAGE_OUTPUT_PATH);

/**
 * Process an Obsidian markdown file and convert it to Astro format
 * @param {string} filePath - Path to the Obsidian markdown file
 */
function processObsidianFile(filePath) {
  console.log(`Processing: ${filePath}`);
  
  try {
    // Read the file
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Parse frontmatter
    const { data, content } = matter(fileContent);
    
    // Ensure required frontmatter exists
    const frontmatter = {
      title: data.title || path.basename(filePath, '.md'),
      pubDate: data.pubDate || new Date().toISOString(),
      tags: data.tags || [],
      draft: data.draft !== undefined ? data.draft : false,
    };
    
    // Transform content
    let transformedContent = content;
    
    // Replace Obsidian image syntax ![[image.jpg]] with Markdown ![](path/to/image.jpg)
    transformedContent = transformedContent.replace(
      /!\[\[(.*?)\]\]/g, 
      (match, imageName) => {
        // Try to find the image in multiple possible locations
        let imagePath;
        const possiblePaths = [
          path.join(OBSIDIAN_VAULT_PATH, imageName),
          path.join(OBSIDIAN_VAULT_PATH, ATTACHMENTS_FOLDER, imageName),
          path.join(path.dirname(filePath), imageName)
        ];
        
        for (const possiblePath of possiblePaths) {
          if (fs.existsSync(possiblePath)) {
            imagePath = possiblePath;
            break;
          }
        }
        
        if (imagePath) {
          const destPath = path.join(IMAGE_OUTPUT_PATH, imageName);
          fs.copySync(imagePath, destPath);
          console.log(`  Copied image: ${imageName}`);
        } else {
          console.warn(`  Warning: Image not found: ${imageName}`);
        }
        
        return `![](/images/${imageName})`;
      }
    );
    
    // Replace Obsidian internal links [[Page Name]] with Markdown links
    transformedContent = transformedContent.replace(
      /\[\[(.*?)(\|(.*?))?\]\]/g,
      (match, pageName, _, altText) => {
        const linkText = altText || pageName;
        const slug = pageName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
        return `[${linkText}](/writing/${slug})`;
      }
    );
    
    // Handle callouts/admonitions
    transformedContent = transformedContent.replace(
      /> \[!(\w+)\](.*?)(?:\n>.*?)*(?:\n\n|\n$)/gs,
      (match, type, title) => {
        const calloutContent = match
          .split('\n')
          .map(line => line.startsWith('> ') ? line.substring(2) : line)
          .join('\n');
        
        return `<div class="callout callout-${type.toLowerCase()}">\n${calloutContent}</div>\n\n`;
      }
    );
    
    // Create the output file
    const slug = path.basename(filePath, '.md')
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');
    const outputPath = path.join(WRITING_OUTPUT_PATH, `${slug}.md`);
    
    // Write the new file with frontmatter
    const outputContent = matter.stringify(transformedContent, frontmatter);
    fs.writeFileSync(outputPath, outputContent);
    
    console.log(`  Converted to: ${outputPath}`);
  } catch (error) {
    console.error(`  Error processing ${filePath}:`, error);
  }
}

/**
 * Main function to process Obsidian files
 */
function main() {
  // Check if the Obsidian vault path exists
  if (!fs.existsSync(OBSIDIAN_VAULT_PATH)) {
    console.error(`Error: Obsidian vault path not found: ${OBSIDIAN_VAULT_PATH}`);
    console.error('Please update the OBSIDIAN_VAULT_PATH in the script.');
    return;
  }
  
  // Get command line arguments
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage: node obsidian-to-astro.js [file1.md] [file2.md] ...');
    console.log('Or to process all .md files: node obsidian-to-astro.js --all');
    console.log('Or to process files in a specific folder: node obsidian-to-astro.js --folder path/to/folder');
    return;
  }
  
  if (args[0] === '--all') {
    // Process all markdown files in the vault
    const files = fs.readdirSync(OBSIDIAN_VAULT_PATH)
      .filter(file => file.endsWith('.md'))
      .map(file => path.join(OBSIDIAN_VAULT_PATH, file));
    
    console.log(`Found ${files.length} markdown files to process.`);
    
    files.forEach(processObsidianFile);
  } else if (args[0] === '--folder' && args[1]) {
    const folderPath = path.resolve(args[1]);
    
    if (!fs.existsSync(folderPath)) {
      console.error(`Folder not found: ${folderPath}`);
      return;
    }
    
    const files = fs.readdirSync(folderPath)
      .filter(file => file.endsWith('.md'))
      .map(file => path.join(folderPath, file));
    
    console.log(`Found ${files.length} markdown files to process in ${folderPath}.`);
    
    files.forEach(processObsidianFile);
  } else {
    // Process specific files
    args.forEach(file => {
      const filePath = path.resolve(file);
      if (fs.existsSync(filePath)) {
        processObsidianFile(filePath);
      } else {
        console.error(`File not found: ${filePath}`);
      }
    });
  }
  
  console.log('Done!');
}

// Run the main function
main(); 