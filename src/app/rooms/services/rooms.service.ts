import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { AppConfig } from '../../appConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../../appConfig/appconfig.service';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})

export class RoomsService {
  headers = new HttpHeaders(
    { 'token': '1234567889' }
  );

  getRooms$ = this.http.get<RoomList[]>('api/rooms', {
    headers: this.headers
  }).pipe(
    shareReplay(1)
  );

  // roomsList: RoomList[] = [
  //   {
  //     roomNumber: 1,
  //     roomType: "Deluxe Room",
  //     amenities: "AC, Wi-Fi",
  //     price: 100,
  //     checkinTime: new Date("11-Nov-2022"),
  //     checkoutTime: new Date("11-Nov-2022")
  //   },
  //   {
  //     roomNumber: 2,
  //     roomType: "Deluxe Room",
  //     amenities: "AC, Wi-Fi",
  //     price: 200,
  //     checkinTime: new Date("11-Nov-2022"),
  //     checkoutTime: new Date("11-Nov-2022")
  //   },
  //   {
  //     roomNumber: 3,
  //     roomType: "Deluxe Room",
  //     amenities: "AC, Wi-Fi",
  //     price: 300,
  //     checkinTime: new Date("11-Nov-2022"),
  //     checkoutTime: new Date("11-Nov-2022")
  //   },
  //   {
  //     roomNumber: 4,
  //     roomType: "Deluxe Room",
  //     amenities: "AC, Wi-Fi",
  //     price: 400,
  //     checkinTime: new Date("11-Nov-2022"),
  //     checkoutTime: new Date("11-Nov-2022")
  //   }
  // ];

  constructor(
    @Inject(APP_SERVICE_CONFIG)
    private config: AppConfig,
    private http: HttpClient
  ) {
    console.log(this.config.apiEndpoint);
  }

  getRooms() {
    return this.http.get<RoomList[]>('api/rooms');
    //return this.roomsList;
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList>('api/rooms', room);
  }

  getPhotos() {
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`, {
      reportProgress: true
    });

    return this.http.request(request);
  }
}