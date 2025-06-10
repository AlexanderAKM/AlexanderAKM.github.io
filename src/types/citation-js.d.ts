declare module 'citation-js' {
  class Cite {
    constructor(data: string | object);
    get(options: { id: string }): any[];
    format(type: string, options: any): string;
  }
  export default Cite;
} 