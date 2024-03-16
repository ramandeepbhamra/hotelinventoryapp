import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'rummy-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [RoomsService]
})
export class EmployeeComponent {
  empName: string = 'Rummy Singh';

  constructor(
    @Self()
    private roomsService: RoomsService
  ) {

  }
}
