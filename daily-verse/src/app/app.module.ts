import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritesService } from './favorites.service';

const startupServiceFactory = (favorites: FavoritesService) => {
  return () => favorites.init();
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [
    FavoritesService,
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
