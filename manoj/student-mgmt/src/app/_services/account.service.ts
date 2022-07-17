import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";



@Injectable({ providedIn: "root" })
export class AccountService {
  constructor(private http: HttpClient) { }
  login(username: string, password: string) {
    return this.http.post(`http://localhost:8080/api/auth/signin`, { username: username, password: password })
  }
  signup(email: string, password: string, username: string) {
    return this.http.post(`http://localhost:8080/api/auth/signup`, { username, password, email })
  }
}
