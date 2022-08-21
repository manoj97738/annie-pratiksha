
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';

enum EmailStatus {
  Verifying,
  Failed
}
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService
  ) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });


  }
  get f(): any { return this.form.controls; }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.accountService.login(this.f.username.value, this.f.password.value)
      .subscribe({
        next: (user: any) => {
          alert("  login success");
          const dt: any = JSON.stringify(user)
          sessionStorage.setItem("user", dt);
          sessionStorage.setItem("accessToken", JSON.stringify(user.accessToken));
          this.accountService.emitEvent({ login: true, ...dt })
        },
      });
  }
  signup() {
    if (this.form.invalid) {
      return;
    }
    this.accountService.signup(this.f.email.value, this.f.password.value, this.f.username.value)
      .subscribe({
        next: (user) => {
          sessionStorage.setItem("user", JSON.stringify(user));
          sessionStorage.setItem("user", JSON.stringify(user));
        },
      });
  }

  getLoginError(controlName: any) {
    // if (this.submittedLoginForm1) {
    //   return this.fh.formInputError(this.form, controlName);
    // }
    return '';
  }
}