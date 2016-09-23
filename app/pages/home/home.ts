import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppStore } from "angular2-redux";
import { counterSelector } from "../../reducers";


import { CounterActions } from "../../actions";

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    private counter;

  constructor(
      private appStore:AppStore,
      public navCtrl: NavController,
      private counterActions:CounterActions
  ) {

      appStore.select(counterSelector).subscribe(counter => {
          console.log("counterSelector", counter);
          this.counter = counter;
      });





  }

  increment() {
      this.appStore.dispatch(this.counterActions.increment());
      console.log(this.appStore.getState());
  }

  decrement() {
      this.appStore.dispatch(this.counterActions.decrement());
  }

    doubleIncrement() {
        this.appStore.dispatch(this.counterActions.doubleIncrement());

    }

    addFive() {
        this.appStore.dispatch(this.counterActions.addFive());
    }

}
