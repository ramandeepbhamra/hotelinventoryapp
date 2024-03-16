import { Component, Inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LOCAL_STORAGE_TOKEN } from '../localstorage.token';

@Component({
  selector: 'rummy-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {
  selectedLang: string = 'en';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    @Inject(LOCAL_STORAGE_TOKEN)
    private localStorage: Storage,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.selectedLang = this.localStorage.getItem('lang') || 'en';
  }

  changeLanguage() {
    this.localStorage.setItem('lang', this.selectedLang);
    window.location.reload();
    //console.log(this.selectedLang);
  }

}
