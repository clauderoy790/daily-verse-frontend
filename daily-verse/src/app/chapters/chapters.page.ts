import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Book } from '../_models/book';
import { Chapter } from '../_models/chapter';
import { BibleService } from './../bible.service';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.page.html',
  styleUrls: ['./chapters.page.scss'],
})
export class ChaptersPage implements OnInit {
  book: Book;
  constructor(private router: Router, private bibleService: BibleService) {
    const book = this.router.getCurrentNavigation().extras.state.book;
    this.bibleService
      .getBook(book)
      .pipe(take(1))
      .subscribe((b) => {
        this.book = b;
        console.log('book: ');
        console.log(this.book);
      });
  }

  ngOnInit() {}

  goToChapter(chapter: Chapter) {
    this.router.navigate(['tabs/verses'], { state: { chapter } });
  }
}
