import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedin: boolean = false;
  isAdmin: boolean = false;

  constructor() { }

  login(email: string, password: string): boolean {
    if (email === "admin@gmail.com" && password === "Admin") {
      this.isLoggedin = true;
      this.isAdmin = true;
    }

    if (email === "user@gmail.com" && password === "Admin") {
      this.isLoggedin = true;
    }

    return this.isLoggedin;
  }
}
