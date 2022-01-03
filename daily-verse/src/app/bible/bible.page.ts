import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
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
  private destroyed$ = new Subject();
  constructor(
    private router: Router,
    private bible: BibleService,
    public favorites: FavoritesService
  ) {
    this.today = new Date();
  }

  ngOnInit() {
    this.router.events
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe((event: any) => {
        const verse = this.router.getCurrentNavigation()?.extras?.state?.verse;
        if (verse) {
          this.randomVerse = verse;
        }
      });
  }

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
