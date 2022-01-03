import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from '../favorites.service';
import { BibleVerse } from '../_models/bible-verse';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  verses: BibleVerse[] = [];
  constructor(private router: Router, private favorites: FavoritesService) {
    console.log('ready to read it');
    const v: BibleVerse = {
      book: 'John',
      chapter: 2,
      verse: 1,
      text: 'salut les amis',
    };
    const v2: BibleVerse = {
      book: 'Luke',
      chapter: 18,
      verse: 4,
      text: 'this is another verse',
    };
    this.verses.push(v);
    this.verses.push(v2);
  }

  ngOnInit(): void {}

  verseClick(verse: BibleVerse) {
    console.log('clicked the verse: ', verse);
    this.router.navigate(['tabs/bible'], { state: { verse } });
  }
}
