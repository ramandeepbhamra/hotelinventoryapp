import { HttpEventType } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { catchError, map, Observable, of, Subject } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
import { ConfigService } from '../services/config.service';
import { RoomsService } from './services/rooms.service';
import { FormControl } from '@angular/forms';

let selector = 'rummy-rooms';

@Component({
  selector: selector,
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  animations: []
})

export class RoomsComponent implements OnInit, AfterViewInit {
  constructor(
    @SkipSelf()
    private roomsService: RoomsService,
    private configService: ConfigService
  ) {
  }

  //rooms$ = this.roomsService.getRooms$;

  error$ : Subject<string> = new Subject<string>;

  getError$ = this.error$.asObservable();

  roomsCount$ = this.roomsService.getRooms$.pipe(
    map(rooms => rooms.length)
  );

  rooms$ = this.roomsService.getRooms$.pipe(
    catchError(err => {
      //console.log(err);
      this.error$.next(err.message);
      return of([]);
    })
  );

  priceFilter : FormControl = new FormControl(0);

  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
    console.log(this.headerComponent);
    this.headerComponent.title = 'Rooms View';

    console.log(this.headerComponentList);
    this.headerComponentList.last.title = 'Ki khap aa';
  }

  hotelName: string = 'Welcome to My Hotel!';
  numberOfRooms: number = 10;
  hideRooms: boolean = true;

  rooms: Room = {
    totalRooms: 50,
    availabeRooms: 20,
    bookedRooms: 30
  };

  roomsList: RoomList[] = [];
  selectedRoom!: RoomList;
  totalBytes = 0;

  subject = new Subject<number>();

  stream = new Observable(observe => {
    observe.next('observe 1');
    observe.next('observe 2');
    observe.next('observe 3');
    observe.next('observe 4');
    observe.complete();
    observe.error('error');
  });

  stream1 = new Observable(observe => {
    setTimeout(() => {
      observe.next('I am overved....');
      observe.complete();
      observe.error('error');
    }, 2000);
  });

  //@ViewChild(HeaderComponent, { static: true })
  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerComponentList!: QueryList<HeaderComponent>;

  ngOnInit(): void {
    this.roomsService.getPhotos().subscribe(event => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made!');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request Success!');
          break;
        }
        case HttpEventType.DownloadProgress: {
          console.log('Request has been made!');
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
          break;
        }
      }
    });

    this.stream.subscribe(data => console.log(data));
    this.stream.subscribe(data => console.log(data));
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err)
    });

    this.subject.subscribe({
      next: (v) => console.log(`observerA subject: ${v}`)
    });
    this.subject.subscribe({
      next: (v) => console.log(`observerB subject: ${v}`)
    });
 
    this.subject.next(1);
    this.subject.next(2);

    this.stream1.subscribe(data => console.log(data));

    console.log(this.headerComponent);

    //this.roomsList = this.roomsService.getRooms();

    this.roomsService.getRooms$.subscribe(rooms => {
      this.roomsList = rooms;
    });

    this.roomsService.getRooms$.subscribe(rooms => {
      this.roomsList = rooms;
    });

  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomList) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 5,
      roomType: "Dynamic Deluxe Room",
      amenities: "AC, Wi-Fi",
      price: 500,
      checkinTime: new Date("11-Nov-2022"),
      checkoutTime: new Date("11-Nov-2022"),
      photo: '',
      rating: 0
    }

    //this.roomsList.push(room);
    //this.roomsList = [...this.roomsList, room];

    this.roomsService.addRoom(room).subscribe(data => {
      this.roomsList = [...this.roomsList, room];
    });
  }
}