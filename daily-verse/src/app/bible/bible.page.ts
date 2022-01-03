import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { BibleService } from './../bible.service';
import { BibleVerse } from './../_models/bible-verse';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.page.html',
  styleUrls: ['./bible.page.scss'],
})
export class BiblePage implements OnInit {
  today: Date;
  randomVerse: BibleVerse;
  constructor(private bible: BibleService, public favorites: FavoritesService) {
    this.today = new Date();
  }

  ngOnInit() {}

  getVerseTitle() {
    if (!this.randomVerse) {
      return '';
    }
    return `${this.randomVerse.book} ${this.randomVerse.chapter}:${this.randomVerse.verse}`;
  }

  favoriteClick() {}

  getVerseClick() {
    this.bible.getRandomVerse().subscribe((v) => (this.randomVerse = v));
  }
}
