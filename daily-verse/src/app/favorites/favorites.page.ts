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
  }

  ngOnInit(): void {}

  verseClick(verse: BibleVerse) {
    console.log('clicked the verse: ', verse);
    this.router.navigate(['tabs/bible'], { state: { verse } });
  }
}
