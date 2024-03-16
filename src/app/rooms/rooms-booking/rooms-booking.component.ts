import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'rummy-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css']
})
export class RoomsBookingComponent implements OnInit {
  id: number = 0;

  // id$ = this.router.params.pipe(
  //   map(params => params['id'])
  // );

  id$ = this.router.paramMap.pipe(
    map(params => params.get('id'))
  );

  constructor(private router: ActivatedRoute) {

  }

  ngOnInit(): void {
    console.log('From Snapshot', this.router.snapshot.params['id']);

    this.router.params.subscribe(
      params => {
        console.log(params);
        console.log(params['id']);
        this.id = params['id'];
      });
  }

}
