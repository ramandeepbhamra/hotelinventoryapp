import { Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'rummy-observable-vs-subject',
  templateUrl: './observable-vs-subject.component.html',
  styleUrls: ['./observable-vs-subject.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ObservableVsSubjectComponent {
  observableData: string = '';
  observableData2: string = '';
  subjectData: string = '';
  subjectData2: string = '';

  getObservableData() {
    let myObserver = new Observable<any>(observer => {
      //observer.next('Please subscribe to observer.');
      observer.next(Math.floor(Math.random() * 99) + 1)
    });

    myObserver.subscribe((data: any) => {
      this.observableData = data;
    });

    myObserver.subscribe((data: any) => {
      this.observableData2 = data;
    });
  }

  getSubjectData() {
    let mySubject = new Subject<any>();
    //mySubject.next('Please subscribe to subject.');

    mySubject.subscribe((data: any) => {
      this.subjectData = data;
    });

    mySubject.subscribe((data: any) => {
      this.subjectData2 = data;
    });

    //mySubject.next('Please subscribe to subject.');

    mySubject.next((Math.floor(Math.random() * 99) + 1))
  }
}
