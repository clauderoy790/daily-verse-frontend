import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getRandomVerse(): Observable<string> {
    const obs = new Observable<string>((observer) => {
      const book = this.randomNumber(0, this.books.length);
      this.getBook(this.books[book]).subscribe((b) => {
        const chap = this.randomNumber(0, b.chapters.length);
        const verse = this.randomNumber(0, b.chapters[chap].verses.length);
        observer.next(b.chapters[chap].verses[verse].text);
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
