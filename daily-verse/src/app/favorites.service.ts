import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BibleVerse } from './_models/bible-verse';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  favorites: BibleVerse[] = [];

  constructor(private storage: Storage) {}

  init(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.storage
        .create()
        .then((s) => {
          resolve();
        })
        .catch((reason) => {
          reject();
        });
    });
  }

  save(verse: BibleVerse): void {
    // add item to array
    // save storage
  }

  remove(verse: BibleVerse): void {
    // remove item from array
    // save storage
  }

  isSaved(verse: BibleVerse): boolean {
    // check if item is in array
    // if yes, return true, if not, return false
    return false;
  }
}
