import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Book } from '../_models/book';
import { BibleService } from './../bible.service';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.page.html',
  styleUrls: ['./chapters.page.scss'],
})
export class ChaptersPage implements OnInit {
  book: Book;
  chapterIndexes: number[] = [];
  constructor(private router: Router, private bibleService: BibleService) {
    const book = this.router.getCurrentNavigation().extras.state.book;
    console.log('book: ', book);

    this.bibleService
      .getBook(book)
      .pipe(take(1))
      .subscribe((b) => {
        this.book = b;
        this.chapterIndexes = this.book.chapters
          .filter((v, i) => i % 4 === 0)
          .map((v, i) => i);
      });
  }

  ngOnInit() {}

  chapterExists(i: number): boolean {
    return i >= 0 && i < this.book.chapters.length;
  }

  goToChapter(i: number) {
    if (!this.chapterExists(i)) {
      return;
    }

    const chapter = this.book.chapters[i];
    this.router.navigate(['verses'], { state: { chapter, book: this.book } });
  }

  getChapterDisplay(i: number): string {
    if (!this.chapterExists(i)) {
      return '';
    }
    return (i + 1).toString();
  }
}
