import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import * as fromAuth from '../reducers';
import { AuthActions } from '../actions';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { User } from '../../../../../webModel/User';
import { environment } from '../../../../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Component({
  selector: 'vex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInUp400ms
  ]
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  inputType = 'password';
  visible = false;

  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;

  constructor(private router: Router,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
      private snackbar: MatSnackBar,
      private http: HttpClient,
      private toastr: ToastrService,
      private store: Store<fromAuth.State>
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  send() {
    let user : User  = {
        userName : this.form.controls["email"].value,
        userPassword : this.form.controls["password"].value,
        userEmail : '',
    }

    // let body = JSON.stringify({ 'UserName': user.userName, 'Password': user.userPassword })
    console.log(user);
    this.store.dispatch(AuthActions.login({ user }))
      //  this.http.post<User>(environment.apiURL + 'User/Login', body, httpOptions).subscribe(
      //      (result: any) => {
      //          localStorage.setItem('DeepBot', result.token);
      //          this.router.navigateByUrl('');
      //      },
      //      (err) => { }
      //  );
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
