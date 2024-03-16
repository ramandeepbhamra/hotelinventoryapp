import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { mergeMap, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'rummy-merge-map-vs-switch-map',
  templateUrl: './merge-map-vs-switch-map.component.html',
  styleUrls: ['./merge-map-vs-switch-map.component.css']
})
export class MergeMapVsSwitchMapComponent implements OnInit {
  isLoading: boolean = false;
  searchControl: FormControl = new FormControl();
  fruits: string[] = [];

  ngOnInit(): void {
    this.isLoading = false;
    // this.searchControl.valueChanges.pipe(
    //   mergeMap((searchTxt: string) => this.filter(searchTxt))
    // ).subscribe((fruits: any) => {
    //   this.isLoading = false;
    //   this.fruits = fruits;
    // });

    this.searchControl.valueChanges.pipe(
      switchMap((searchTxt: string) => this.filter(searchTxt))
    ).subscribe((fruits: any) => {
      this.isLoading = false;
      this.fruits = fruits;
    });
  }

  filter(searchTxt: string): any {
    this.isLoading = true;

    let observableOne = new Observable<string[]>((observer) => {
      setTimeout(() => {
        observer.next(['Apple', 'Pineapple'])
      }, 5000);
    });

    let observableTwo = new Observable<string[]>((observer) => {
      setTimeout(() => {
        observer.next(['Mango', 'Orange'])
      }, 5000);
    });

    if (searchTxt === 'app') {
      return observableOne
    }
    else {
      return observableTwo
    }
  }
}