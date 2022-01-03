import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FavoritesService } from '../favorites.service';
import { BibleVerse } from '../_models/bible-verse';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit, OnDestroy {
  verses: BibleVerse[] = [];
  private destroyed$ = new Subject();
  constructor(private router: Router, private favorites: FavoritesService) {
    this.favorites.changed.pipe(takeUntil(this.destroyed$)).subscribe((fav) => {
      this.verses = fav;
    });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  verseClick(verse: BibleVerse) {
    console.log('clicked the verse: ', verse);
    this.router.navigate(['tabs/bible'], { state: { verse } });
  }
}
