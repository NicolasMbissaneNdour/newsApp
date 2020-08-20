import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NewsService } from './services/news.service';

var firebaseConfig = {
  apiKey: "AIzaSyC16Yns8q-W21MqwlykDXlpooYru5_cHAo",
  authDomain: "newsapp-ionic.firebaseapp.com",
  databaseURL: "https://newsapp-ionic.firebaseio.com",
  projectId: "newsapp-ionic",
  storageBucket: "newsapp-ionic.appspot.com",
  messagingSenderId: "16958730643",
  appId: "1:16958730643:web:398cb38d85a68d8febf866",
  measurementId: "G-HGK7H158WT"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
