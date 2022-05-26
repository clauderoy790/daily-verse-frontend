import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chapter } from '../_models/chapter';
import { Book } from './../_models/book';

@Component({
  selector: 'app-verses',
  templateUrl: './verses.page.html',
  styleUrls: ['./verses.page.scss'],
})
export class VersesPage implements OnInit {
  chapter: Chapter;
  book: Book;
  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation().extras.state;
    this.chapter = state.chapter;
    this.book = state.book;
  }

  ngOnInit() {}
}
