import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rummy-promices',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {
  isOnline: boolean = false;
  status: string = 'offline';
  myPromice!: Promise<boolean>;

  ngOnInit(): void {
    this.getStatus();

    this.myPromice.then(
      (res: boolean) => {
        console.log(res);
        this.checkLogic();
      },
      (err: string) => {
        console.log(err);
      }
    );

    //this.checkLogic();
  }

  getStatus(): void {
    //this.isOnline = true;
    console.log("Get Status Call");

    this.myPromice = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        console.log("Retrieve Status value");
        this.isOnline = true;

        //resolve(this.isOnline);
        reject("Db Connection Issue");
      }, 5000);
    })

    // setTimeout(() => {
    //   console.log("Retrieve Status value");
    //   this.isOnline = true;
    // }, 0);
  }

  checkLogic(): void {
    console.log("Check Logic Call");
    if (this.isOnline) {
      this.status = 'online';
    }
    else {
      this.status = 'offline';
    }
  }
}
