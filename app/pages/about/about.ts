import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
    private items = [];

    constructor(
        public navCtrl: NavController,
        private http: Http) {

        var timer = Date.now();
        this.http.get('people-big.json').map(data => data.json()).subscribe((data) => {
            this.items = data;
        });
        console.log("time ins ms: ",Date.now() - timer);

    }


}
