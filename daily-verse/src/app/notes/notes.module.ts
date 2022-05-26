import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { NotesPageRoutingModule } from './notes-routing.module';
import { NotesPage } from './notes.page';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    IonicModule,
    NotesPageRoutingModule,
  ],
  declarations: [NotesPage],
})
export class NotesPageModule {}
