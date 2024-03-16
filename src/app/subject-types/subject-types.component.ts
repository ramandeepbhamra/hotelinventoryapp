import { Component } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'rummy-subject-types',
  templateUrl: './subject-types.component.html',
  styleUrls: ['./subject-types.component.css']
})
export class SubjectTypesComponent {
  myData: number[] = [];
  subject = new Subject();

  //subject = new ReplaySubject();
  //subject = new ReplaySubject(2);

  //subject = new BehaviorSubject(500);

  emitData() {
    this.subject.next(1);
    console.log(1);

    setTimeout(() => {
      this.subject.next(2);
      console.log(2);
    }, 3000);

    setTimeout(() => {
      this.subject.next(3);
      console.log(3);
    }, 6000);

    setTimeout(() => {
      this.subject.next(4);
      console.log(4);
    }, 9000);

    setTimeout(() => {
      this.subject.next(5);
      console.log(5);
    }, 12000);

    setTimeout(() => {
      this.subject.next(6);
      console.log(6);
    }, 15000);
  }

  getData() {
    console.log("Subscribed");
    this.subject.subscribe((data: any) => {
      this.myData.push(data);
    });
  }
}
