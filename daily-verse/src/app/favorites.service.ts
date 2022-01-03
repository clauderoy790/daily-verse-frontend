import { isEqual } from 'lodash';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BibleVerse } from './_models/bible-verse';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  favorites: BibleVerse[] = [];

  constructor(private storage: Storage) {
  }

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
    this.favorites.push(verse);
    this.storage.set('favorites',this.favorites);
    
  }

  remove(verse: BibleVerse): void {
    this.favorites = this.favorites.filter (fa => !isEqual(fa,verse));
    this.storage.set('favorites',this.favorites);
    
  }

  isSaved(verse: BibleVerse): boolean {
    
    // check if item is in array
    // if yes, return true, if not, return false
    return false;
  }
}
