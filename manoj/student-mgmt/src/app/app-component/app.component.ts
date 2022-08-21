import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'student-mgmt';
  isLoggedin = false;
  constructor(public accountService: AccountService) {
    const accessToken = sessionStorage.getItem("accessToken");
    if(accessToken){
      this.isLoggedin = true;
    }
    this.accountService.$subLogin
      .subscribe((data) => {
        alert("Login subject");
        this.isLoggedin = true;
      })
  }
  logoutUser() {
    alert("  Logut success");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("accessToken");
    this.isLoggedin = false;
  }

}
