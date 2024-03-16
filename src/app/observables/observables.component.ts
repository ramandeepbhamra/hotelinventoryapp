import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'rummy-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  count: number = 0;
  data: number[] = [];

  myObservable = new Observable<number[]>;

  ngOnInit(): void {
    this.myObservable = new Observable<number[]>((observer) => {
      setInterval(() => {
        if (this.count <= 5) {
          this.count++;
          this.data.push(this.count);

          observer.next(this.data);
        }
        else {
          //observer.complete();
          const newNumber: number[] = [500, 1000];
          observer.error(newNumber);
        }
      }, 2000);
    });
  }

  getData() {
    this.myObservable.subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Completed');
      }
    });

    //console.log(this.data);
  }
}
