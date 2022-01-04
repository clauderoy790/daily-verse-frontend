import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { BiblePageRoutingModule } from './bible-routing.module';
import { BiblePage } from './bible.page';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    IonicModule,
    BiblePageRoutingModule,
  ],
  declarations: [BiblePage],
})
export class BiblePageModule {}
