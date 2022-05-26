import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VersesPageRoutingModule } from './verses-routing.module';

import { VersesPage } from './verses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VersesPageRoutingModule
  ],
  declarations: [VersesPage]
})
export class VersesPageModule {}
