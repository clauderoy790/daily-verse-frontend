import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OLD_TESTAMENT_BOOKS } from './../bible.service';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.page.html',
  styleUrls: ['./bible.page.scss'],
})
export class BiblePage {
  books: string[] = [];
  constructor(private router: Router) {
    this.setBooks(OLD_TESTAMENT_BOOKS);
  }
  setBooks(books: string[]) {
    this.books = books;
  }

  bookClick(book: string) {
    this.router.navigate(['tabs/chapters'], { state: { book } });
  }
}
