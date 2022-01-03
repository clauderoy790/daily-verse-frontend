import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FavoritesPageRoutingModule } from './favorites-routing.module';
import { FavoritesPage } from './favorites.page';

@NgModule({
  imports: [IonicModule, BrowserModule ,CommonModule, FormsModule, FavoritesPageRoutingModule],
  declarations: [FavoritesPage],
})
export class FavoritesPageModule {}
