import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'À la Une',
      url: '/folder/À la Une',
      icon: 'newspaper'
    },
    {
      title: 'En Direct',
      url: '/folder/En direct',
      icon: 'play'
    },
    {
      title: 'Mes favoris',
      url: '/folder/Mes favoris',
      icon: 'heart'
    },
    {
      title: 'Vidéos',
      url: '/folder/Vidéos',
      icon: 'videocam'
    },
    {
      title: 'Sport',
      url: '/folder/Sport',
      icon: 'basketball'
    },
    {
      title: 'Société',
      url: '/folder/Société',
      icon: 'flame'
    },
    {
      title: 'Politique',
      url: '/folder/Politique',
      icon: 'flag'
    },
    {
      title: 'Économie',
      url: '/folder/Économie',
      icon: 'stats-chart'
    },
    {
      title: 'Culture',
      url: '/folder/Culture',
      icon: 'star-half'
    },
    {
      title: 'Santé',
      url: '/folder/Santé',
      icon: 'pulse'
    },
    {
      title: 'Éducation',
      url: '/folder/Éducation',
      icon: 'school'
    },
    {
      title: 'Environnement',
      url: '/folder/Environnement',
      icon: 'leaf'
    },
    {
      title: 'Cuisine',
      url: '/folder/Cuisine',
      icon: 'restaurant'
    },
    {
      title: 'Technologie',
      url: '/folder/Technologie',
      icon: 'rocket'
    },
    {
      title: 'Internationale',
      url: '/folder/Internationale',
      icon: 'earth'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private newsService:NewsService
    ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
   
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
  
}
