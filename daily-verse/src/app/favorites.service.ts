import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { isEqual } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { BibleVerse } from './_models/bible-verse';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  readonly key = 'favorites';
  favorites: BibleVerse[] = [];
  changed: BehaviorSubject<BibleVerse[]> = new BehaviorSubject([]);

  constructor(private storage: Storage) {}

  init(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.storage
        .create()
        .then((s) => {
          this.storage
            .get(this.key)
            .then((val) => {
              this.favorites = val ?? [];
              this.changed.next(this.favorites);
            })
            .catch((r) => reject());
          resolve();
        })
        .catch((reason) => {
          reject();
        });
    });
  }

  save(verse: BibleVerse): void {
    this.favorites.push(verse);
    this.changed.next(this.favorites);
    this.storage.set(this.key, this.favorites);
  }

  remove(verse: BibleVerse): void {
    this.favorites = this.favorites.filter((fa) => !isEqual(fa, verse));
    this.changed.next(this.favorites);
    this.storage.set(this.key, this.favorites);
  }

  isSaved(verse: BibleVerse): boolean {
    return this.favorites.some((fa) => isEqual(fa, verse));
  }
}
