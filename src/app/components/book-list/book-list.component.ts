import { Component, OnInit, inject } from '@angular/core';
import { Books } from '../../book';
import { BookService } from '../../service/book.service'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {


  bookList: Books[] = [];
  bookService: BookService = inject(BookService);
  filteredBookList: Books[] = [];

  constructor() {
    this.bookService.getAllBooks().then((bookList: Books[]) => {

      this.bookList = bookList;
      this.filteredBookList = bookList;
    });
  }

  ngOnInit(): void {}

  filterResults(text: string) {
    if (!text) {
      this.filteredBookList = this.bookList;
      return;
    }

    this.filteredBookList = this.bookList.filter(
      book => book?.title.toLowerCase().includes(text.toLowerCase()));
  }

}
