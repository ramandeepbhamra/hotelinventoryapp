import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'rummy-observable-vs-promice',
  templateUrl: './observable-vs-promise.component.html',
  styleUrls: ['./observable-vs-promise.component.css']
})
export class ObservableVsPromiseComponent implements OnInit {
  myObserverable!: Observable<string>;
  myPromise!: Promise<string>;
  mySubscriptionToMyObserverable!: Subscription;

  ngOnInit(): void {

  }

  create() {
    this.myObserverable = new Observable<string>(observer => {
      console.log('myObserverable is created.');
      observer.next('myObserverable emmitted data 1.');
      observer.next('myObserverable emmitted data 2.');
      observer.next('myObserverable emmitted data 3.');
      observer.next('myObserverable emmitted data 4.');

      setInterval(() => {
        observer.next('myObserverable is emmitting data.');
      }, 1000);
    });

    this.myPromise = new Promise<string>((resolve, reject) => {
      console.log('mypromise is created');
      // resolve('mypromise emmitted data 1.');
      // resolve('mypromise emmitted data 2.');
      // resolve('mypromise emmitted data 3.');
      // resolve('mypromise emmitted data 4.');

      setInterval(() => {
        resolve('mypromise is emmitting data.');
      }, 1000);
    });
  }

  execute() {
    // this.myObserverable.subscribe(data => {
    //   console.log(data);
    // });

    this.mySubscriptionToMyObserverable = this.myObserverable.subscribe(data => {
      console.log(data);
    });

    this.myPromise.then(data => {
      console.log(data);
    });
  }

  cancel() {
    this.mySubscriptionToMyObserverable.unsubscribe();
  }
}
