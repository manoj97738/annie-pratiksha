import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";



@Injectable({ providedIn: "root" })
export class AccountService {
  constructor(
    private http: HttpClient
  ) {

  }
  login(username: string, password: string) {
    return this.http.post(`http://localhost:8080/api/auth/signin`, { username: username, password: password })

  }
  signup(email: string, password: string, username: string) {
    return this.http.post(`http://localhost:8080/api/auth/signup`, { username, password, email })

  }
}
