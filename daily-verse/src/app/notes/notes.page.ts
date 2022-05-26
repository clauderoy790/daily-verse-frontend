import { Component, OnInit, ViewChild } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { IonInput } from '@ionic/angular';
import { NotesService } from './../notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  // @ViewChild('inputNewNote', { read: ElementRef })
  @ViewChild('inputNewNote', { read: IonInput })
  inputNewNote: IonInput;
  notes: string[] = [];
  undos: string[] = [];
  addingNewNote = false;
  isEditingNote = false;
  editNoteIndex = 0;
  editedNote = '';
  note = '';
  constructor(private notesService: NotesService, private keyboard: Keyboard) {}

  ngOnInit() {
    this.notesService.get().then((notes) => {
      this.notes = notes;
      this.undos = this.notesService.getUndos();
    });
  }
  newNote() {
    this.addingNewNote = true;
    if (this.inputNewNote) {
      console.log('this works');
    }
    this.inputNewNote?.setFocus();
    this.keyboard.show();
  }

  editNote(index: number) {
    this.isEditingNote = true;
    this.editedNote = this.notes[index];
  }

  saveEdit(index: number) {
    this.notes[index] = this.editedNote;
    this.notesService.save(this.notes);
    this.isEditingNote = false;
  }

  cancelEdit() {
    this.isEditingNote = false
  }

  removeNote(index: number) {
    const note = this.notes.splice(index, 1);
    this.undos.push(note[0]);
    this.save();
  }
  addNewNote() {
    this.notes.push(this.note);
    this.save();
  }

  save() {
    this.addingNewNote = false;
    this.note = '';
    this.notesService.save(this.notes);
  }

  undo() {
    if (this.undos.length === 0) {
      return;
    }
    const note = this.undos.pop();
    this.notes.push(note);
    this.notesService.save(this.notes);
  }
}
