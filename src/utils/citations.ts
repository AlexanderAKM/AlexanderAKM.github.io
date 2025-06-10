import Cite from 'citation-js';

// Function to process citations in markdown content
export function processCitations(content: string, bibtex: string): string {
  // Initialize citation-js with the BibTeX data
  const cite = new Cite(bibtex);
  
  // Replace \cite{key} with APA 7 formatted citations
  return content.replace(/\\cite\{([^}]+)\}/g, (match, key) => {
    try {
      const citation = cite.get({ id: key });
      if (citation && citation.length > 0) {
        const entry = citation[0];
        const authors = entry.author.map((a: any) => a.family).join(', ');
        const year = entry.issued?.['date-parts']?.[0]?.[0] || '';
        return `(${authors}, ${year})`;
      }
    } catch (error) {
      console.error(`Error processing citation for key: ${key}`, error);
    }
    return match; // Return original if processing fails
  });
}

// Function to generate a bibliography from BibTeX
export function generateBibliography(bibtex: string): string {
  try {
    const cite = new Cite(bibtex);
    const bibliography = cite.format('bibliography', {
      format: 'html',
      template: 'apa7',
      lang: 'en-US'
    });
    return bibliography;
  } catch (error) {
    console.error('Error generating bibliography:', error);
    return '';
  }
} 