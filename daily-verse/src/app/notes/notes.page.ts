import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  notes: string[] = [];
  addingNewNote = false;
  note = '';
  constructor() {}

  ionViewWillEnter() {
    this.notes = [
      'salut',
      'coucou lwa amis this is really long the text is super long to be able to test it to see what it does when it is really long',
      'allo',
      'doudou',
    ];
  }

  ngOnInit() {
    this.notes = [
      'salut',
      'coucou lwa amis this is really long the text is super long to be able to test it to see what it does when it is really long',
      'allo',
      'doudou',
    ];
  }
  removeNote(index: number) {
    if (index > -1) {
      this.notes.splice(index, 1);
    }
  }
  addNewNote() {
    this.notes.push(this.note);
    this.addingNewNote = false;
    this.note = '';
  }
}
