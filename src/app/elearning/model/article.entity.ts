import {Source} from "./source.entity";


export class Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  source: Source;


  constructor() {
    this.title = '0';
    this.description = '0';
    this.url = '';
    this.urlToImage = '';
    this.source = new Source();
  }

}


