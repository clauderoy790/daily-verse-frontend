import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  readonly key = 'notes';
  notes: string[] = [];
  undos: string[] = [];
  constructor(private storage: Storage) {}

  get(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      this.storage.get(this.key).then((val) => {
        this.notes = val ?? [];
        resolve(this.notes);
      });
    });
  }

  save(notes: string[]) {
    this.notes = notes;
    this.storage.set(this.key, this.notes);
  }

  getUndos(): string[] {
    return this.undos;
  }
}
