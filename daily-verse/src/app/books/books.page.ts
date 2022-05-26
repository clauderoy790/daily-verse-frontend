import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../_models/book';
import { OLD_TESTAMENT_BOOKS } from './../bible.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {
  books: string[] = OLD_TESTAMENT_BOOKS;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      console.log('the data is: ', data);
      this.books = data as string[];
      console.log(this.books);
    });
  }

  bookClick(book: Book) {
    this.router.navigate(['tabs/chapters'], { state: { book } });
  }
}
