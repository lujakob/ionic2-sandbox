import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, LoadingController } from 'ionic-angular';
import { BmgInfiniteScroll } from '../../components/bmg-infinite-scroll';

@Component({
    templateUrl: 'build/pages/about/about.html',
    directives: [BmgInfiniteScroll]
})
export class AboutPage {
    private items = [];

    constructor(
        public navCtrl: NavController,
        private loadingCtrl: LoadingController,
        private http: Http) {

        var timer = Date.now();
        this.http.get('people.json').map(data => data.json()).subscribe((data) => {
            this.items = data;
        });
        console.log("time ins ms: ",Date.now() - timer);
    }

    doInfinite(infiniteScroll) {
        console.log("do infinite", infiniteScroll);

        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();

        if(infiniteScroll.arrivedAt === 'bottom') {
            setTimeout(() => {
                infiniteScroll.complete();
                infiniteScroll.disableBottom();
                loading.dismiss();
            }, 1000);
        }
        if(infiniteScroll.arrivedAt === 'top') {
            setTimeout(() => {
                infiniteScroll.complete();
                infiniteScroll.disableTop();
                loading.dismiss();
            }, 1000);
        }


    }
}
