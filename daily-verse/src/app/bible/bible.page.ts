import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NEW_TESTAMENT_BOOKS, OLD_TESTAMENT_BOOKS } from './../bible.service';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.page.html',
  styleUrls: ['./bible.page.scss'],
})
export class BiblePage {
  oldBooks = OLD_TESTAMENT_BOOKS;
  newBooks = NEW_TESTAMENT_BOOKS;
  books: string[] = [];
  constructor(private router: Router) {
    this.setBooks(this.oldBooks);
  }
  setBooks(books: string[]) {
    this.books = books;
  }

  bookClick(book: string) {
    this.router.navigate(['chapters'], { state: { book } });
  }
}
