export class Source {
  title: string;
  isbn: number;
  cover_url: string;
  format: string;
  description: string;
  web_url: string;

  constructor() {
    this.title='';
    this.isbn=0;
    this.cover_url='';
    this.format='';
    this.description='';
    this.web_url='';
  }
}
