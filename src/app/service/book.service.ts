import { Injectable } from '@angular/core';
import { Books } from '../book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url = 'http://localhost:3000/books'

  constructor() { }


  async getAllBooks(): Promise<Books[]> {
  const data = await fetch(this.url);
  return await data.json() ?? [];
  }

  async getBookById(id: number): Promise<Books | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

}
