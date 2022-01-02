import { Component, OnInit } from '@angular/core';
import { BibleService } from './../bible.service';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.page.html',
  styleUrls: ['./bible.page.scss'],
})
export class BiblePage implements OnInit {
  randomVerse = '';
  constructor(private bible: BibleService) {
    console.log('in the bible pge');
  }

  ngOnInit() {}

  getVerseClick() {
    this.bible.getRandomVerse().subscribe((v) => (this.randomVerse = v));
  }
}
