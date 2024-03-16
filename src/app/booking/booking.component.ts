import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { exhaustMap, mergeMap, Observable, switchMap } from 'rxjs';
import { RoomsService } from '../rooms/services/rooms.service';
import { ConfigService } from '../services/config.service';
import { CustomValidator } from '../validators/customValidator';

@Component({
  selector: 'rummy-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;
  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(
    private roomsService: RoomsService,
    private configService: ConfigService,
    private fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: new FormControl({ value: 2, disabled: true }, { validators: [Validators.required] }),
      checkInDate: '',
      checkOutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: ['', {
        updateOn: 'blur', validators: [
          Validators.required,
          Validators.minLength(5),
          CustomValidator.validateName,
          CustomValidator.validateSpecialChar('*')]
      }],
      guestEmail: ['', { updateOn: 'blur', validators: [Validators.required, Validators.email] }],
      address: this.fb.group({
        addressLine1: ['', { validators: [Validators.required] }],
        addressLine2: '',
        city: ['', { validators: [Validators.required] }],
        state: ['', { validators: [Validators.required] }],
        country: '',
        zipCode: ''
      }),
      guestCount: '',
      guests: this.fb.array(
        [
          this.fb.group({ guestName: ['', { validators: [Validators.required] }], age: new FormControl('') })
        ]
      ),
      tnc: new FormControl(false, { validators: [Validators.required] })
    },
      { updateOn: 'blur', validators: [CustomValidator.validateDate] });

    this.getBookingData();

    this.bookingForm.valueChanges.subscribe(data => { console.log(data) });

    // this.bookingForm.valueChanges.pipe(
    //   mergeMap(data => this.roomsService.getPhotos())
    // ).subscribe(data => console.log(data));

    // this.bookingForm.valueChanges.pipe(
    //   switchMap(data => this.roomsService.getPhotos())
    // ).subscribe(data => console.log(data));

    // this.bookingForm.valueChanges.pipe(
    //   exhaustMap(data => this.roomsService.getPhotos())
    // ).subscribe(data => console.log(data));
  }

  addBooking() {
    console.log(this.bookingForm)
  }

  getBookingData() {
    //this.bookingForm.patchValue({
    this.bookingForm.patchValue({
      roomId: '2',
      checkInDate: '',
      checkOutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      guestEmail: 'rummy@boss.com',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: ''
      },
      guestCount: '',
      guests: [],
      tnc: ''
    });
  }

  addGuest() {
    this.guests.push(
      this.fb.group(
        {
          guestName: '',
          age: new FormControl('')
        })
    );
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  deletePassport() {
    if (this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    }
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }
}