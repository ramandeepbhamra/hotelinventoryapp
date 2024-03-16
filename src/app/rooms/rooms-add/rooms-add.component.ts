import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'rummy-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.css']
})
export class RoomsAddComponent {
  room: RoomList = {
    roomType: "",
    amenities: "Hello Boss",
    price: 0,
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photo: "",
    rating: 0,
  }

  constructor(private roomsService: RoomsService) {
    // let a: string = '';
    // a='Hola Singh';

    // const b: string ='No assignment after';
    // b='';

    // {
    //   let c: string = '';
    //   var d: string = '';
    //   const e: string ='No assignment after';
    // }

    // console.log(c);
    // console.log(d);
    // console.log(e);
  }

  AddRoom(roomsForm: NgForm) {
    this.roomsService.addRoom(this.room).subscribe(data => {
      console.log(data);
    });

    roomsForm.reset();
  }
}
