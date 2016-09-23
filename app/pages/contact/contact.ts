import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CounterActions } from '../../actions';
import { AppStore } from 'angular2-redux';
import { counterSelector } from '../../reducers';
import { Http } from '@angular/http';
import * as _ from 'lodash';


@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
    public counter;
    private items;
    private allItems;
    private order: string = '';

    constructor(
        private appStore:AppStore,
        public navCtrl: NavController,
        private counterActions:CounterActions,
        private http: Http
    ) {

        appStore.select(counterSelector).subscribe(counter => {
            console.log("counterSelector", counter);
            this.counter = counter;
        });

        var timer = Date.now();

        this.http.get('data.json').map(data => data.json()).subscribe((data) => {
             
            this.allItems = data;
            this.items = this.allItems;
        });

        console.log("time ins ms: ",Date.now() - timer);


    }

    ionViewDidEnter() {
        console.log(this.appStore.getState().counter);
    }

    sortByName() {
        this.order = this.order === '' ? 'asc' : this.order;
        this.items = _.orderBy(this.items, ['name'], [this.order]);
        this.order = this.order === 'desc' ? 'asc' : 'desc';
        console.log(this.order);
    }

    filterBy(filter) {
        switch(filter) {
            case 'female':
                this.items = this.allItems.filter(item => item.gender === 'female')
                break;
            case 'male':
                this.items = this.allItems.filter(item => item.gender === 'male')
                break;

            default:
                this.items = this.allItems;
        }
    }

}
