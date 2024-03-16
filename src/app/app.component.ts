import { AfterViewInit, Component, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LOCAL_STORAGE_TOKEN } from './localstorage.token';
import { InitService } from './init.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rummy-root',
  templateUrl: './app.component.html',
  //template: 'Hola!',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {

  title = 'Hotel inventory app';

  @ViewChild('user', { read: ViewContainerRef })
  vcr!: ViewContainerRef;

  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.numberOfRooms = 500;
  }

  constructor(
    @Inject(LOCAL_STORAGE_TOKEN)
    private localStorage: Storage,
    private initServce: InitService,
    private router: Router,
    private translateService: TranslateService,
  ) {
    //TODO: Displaying all the routing events
    // this.router.events.subscribe(event => {
    //   console.log(event);
    // })
    
    this.translateService.setDefaultLang('en');
    this.translateService.use(this.localStorage.getItem('lang') || 'en');

    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
      ).subscribe(event => {
      console.log(event);
    })

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
      ).subscribe(event => {
      console.log(event);
    })

    console.log('This is InitService', initServce.config, 'Hoal!');
  }

  ngOnInit(): void {
    this.localStorage.setItem('name', 'Hilton Hotel');
    console.log(window.location);
  }

}
