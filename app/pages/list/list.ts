import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {
    private items = [];

    constructor(
        public navCtrl: NavController,
        private http: Http) {

        // this.http.get('people.json').map(data => data.json()).subscribe((data) => {
        //     this.items = data;
        // });
  }


}
