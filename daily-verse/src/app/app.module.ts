import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritesService } from './favorites.service';
import { FavoritesPage } from './favorites/favorites.page';
import { HomePage } from './home/home.page';

const startupServiceFactory = (favorites: FavoritesService) => {
  return () => favorites.init();
};

@NgModule({
  declarations: [AppComponent, HomePage, FavoritesPage],
  entryComponents: [],
  imports: [
    IonicStorageModule.forRoot(),
    CommonModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    FavoritesService,
    Keyboard,
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: startupServiceFactory,
      useClass: IonicRouteStrategy,
      deps: [FavoritesService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
