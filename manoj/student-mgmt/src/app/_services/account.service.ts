import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";



@Injectable({ providedIn: "root" })
export class AccountService {
  $subLogin: Subject<any> = new Subject()
  constructor(private http: HttpClient) { }
  login(username: string, password: string) {
    return this.http.post(`http://localhost:8080/api/auth/signin`, { username: username, password: password })
  }
  signup(email: string, password: string, username: string) {
    return this.http.post(`http://localhost:8080/api/auth/signup`, { username, password, email })
  }
  emitEvent(data: any) {
    this.$subLogin.next(data)
  }
}
