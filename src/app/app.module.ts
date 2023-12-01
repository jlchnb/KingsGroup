import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
// Se importa el plugin y se agrega el plugin para que lo reconozca el proyecto en app.module.ts
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule, AngularFireAuthModule, AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },SQLite], // plugin agregado SQL
  bootstrap: [AppComponent],
})
export class AppModule {}
