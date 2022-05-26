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
      console.log('old testament: ', OLD_TESTAMENT_BOOKS.length);
      console.log('new count: ', NEW_TESTAMENT_BOOKS.length);
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

export const OLD_TESTAMENT_BOOKS: string[] = [
  'Genesis',
  'Exodus',
  'Leviticus',
  'Numbers',
  'Deuteronomy',
  'Joshua',
  'Judges',
  'Ruth',
  '1 Samuel',
  '2 Samuel',
  '1 Kings',
  '2 Kings',
  '1 Chronicles',
  '2 Chronicles',
  'Ezra',
  'Nehemiah',
  'Esther',
  'Job',
  'Psalms',
  'Proverbs',
  'Ecclesiastes',
  'Song of Solomon',
  'Isaiah',
  'Jeremiah',
  'Lamentations',
  'Ezekiel',
  'Daniel',
  'Hosea',
  'Joel',
  'Amos',
  'Obadiah',
  'Jonah',
  'Micah',
  'Nahum',
  'Habakkuk',
  'Zephaniah',
  'Haggai',
  'Zechariah',
  'Malachi',
];
export const NEW_TESTAMENT_BOOKS: string[] = [
  'Matthew',
  'Mark',
  'Luke',
  'John',
  'Acts',
  'Romans',
  '1 Corinthians',
  '2 Corinthians',
  'Galatians',
  'Ephesians',
  'Philippians',
  'Colossians',
  '1 Thessalonians',
  '2 Thessalonians',
  '1 Timothy',
  '2 Timothy',
  'Titus',
  'Philemon',
  'Hebrews',
  'James',
  '1 Peter',
  '2 Peter',
  '1 John',
  '2 John',
  '3 John',
  'Jude',
  'Revelation',
];
