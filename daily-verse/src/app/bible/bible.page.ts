import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FavoritesService } from '../favorites.service';
import { BibleService } from './../bible.service';
import { BibleVerse } from './../_models/bible-verse';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.page.html',
  styleUrls: ['./bible.page.scss'],
})
export class BiblePage implements OnInit, OnDestroy {
  today: Date;
  verse: BibleVerse;
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
      .pipe(takeUntil(this.destroyed$))
      .subscribe((event: any) => {
        const verse = this.router.getCurrentNavigation()?.extras?.state?.verse;
        if (verse) {
          this.verse = verse;
        }
      });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  getVerseTitle() {
    if (!this.verse) {
      return '';
    }
    return `${this.verse.book} ${this.verse.chapter}:${this.verse.verse}`;
  }

  favoriteClick() {
    console.log('favorite click');

    if (this.favorites.isSaved(this.verse)) {
      this.favorites.remove(this.verse);
    } else {
      this.favorites.save(this.verse);
    }
  }

  getVerseClick() {
    this.bible.getRandomVerse().subscribe((v) => (this.verse = v));
  }
}
