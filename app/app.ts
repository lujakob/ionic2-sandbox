import { Component, provide, PLATFORM_DIRECTIVES } from '@angular/core';
import { Platform, ionicBootstrap } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { TabsPage } from './pages/tabs/tabs';
import { BmgInfiniteScrollContent } from './components/bmg-infinite-scroll-content';

import { AppStore, createAppStoreFactoryWithOptions } from "angular2-redux";
import reducers from "./reducers";
import { CounterActions } from "./actions";

const appStoreFactory = createAppStoreFactoryWithOptions({
    reducers,
    debug:true
});

@Component({
    template: '<ion-nav [root]="rootPage"></ion-nav>',
    directives: [BmgInfiniteScrollContent]
})
export class MyApp {

  public rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [
    CounterActions,
    BmgInfiniteScrollContent,
    {provide:AppStore, useFactory: appStoreFactory },
    {provide:PLATFORM_DIRECTIVES, useValue: [BmgInfiniteScrollContent], multi: true}

]);
