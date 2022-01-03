import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BibleVerse } from './_models/bible-verse';
import { Book } from './_models/book';
@Injectable({
  providedIn: 'root',
})
export class BibleService {
  books: string[] = [];
  constructor(private http: HttpClient) {
    this.http.get<string[]>('../assets/bible/Books.json').subscribe((books) => {
      this.books = books;
    });
  }

  getRandomVerse(): Observable<BibleVerse> {
    const rand = [];
    let i = 0;
    let saidMissing = false;
    while (true) {
      const r = this.randomNumber(0, 66);
      if (!rand.includes(r)) {
        rand.push(r);
      }
      ++i;
      if (!saidMissing && rand.length === 65) {
        let j = 0;
        while (true) {
          if (!rand.includes[j]) {
            console.log('missing: ', j, ', at: ', i);
            saidMissing = true;
            break;
          }
          j++;
        }
      }
      if (rand.length === 66) {
        console.log('took : ', i);

        break;
      }
    }
    const obs = new Observable<BibleVerse>((observer) => {
      const book = this.randomNumber(0, this.books.length);
      this.getBook(this.books[book]).subscribe((b) => {
        const chap = this.randomNumber(0, b.chapters.length);
        const verse = this.randomNumber(0, b.chapters[chap].verses.length);
        const bibleVerse: BibleVerse = {
          book: this.books[book],
          verse: verse + 1,
          chapter: chap + 1,
          text: b.chapters[chap].verses[verse].text,
        };
        observer.next(bibleVerse);
        observer.complete();
      });
    });
    return obs;
  }

  getBook(book: string): Observable<Book> {
    return this.http.get<Book>(
      `../assets/bible/${book.replaceAll(' ', '')}.json`
    );
  }

  randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
