import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'rummy-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {
  ngOnDestroy(): void {
    console.log("ngOnDestroy has called");
  }
  
  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  @Input() 
  filterPrice: number = 0;
  
  @Input() 
  rooms: RoomList[] = [];
  
  @Output() 
  slectedRoom = new EventEmitter<RoomList>();

  selectRoom(room: RoomList) {
    this.slectedRoom.emit(room);
  }
}
