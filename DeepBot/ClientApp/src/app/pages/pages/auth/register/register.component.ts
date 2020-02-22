import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { User } from '../../../../../webModel/User';
import { environment } from '../../../../../environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { DialogResultRegisterComponent } from './dialog-result-register/dialog-result-register.component';
import { MatDialog } from '@angular/material';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};




@Component({
  selector: 'vex-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class RegisterComponent implements OnInit {

    form: FormGroup;
    userToCreate: User = new User();

  inputType = 'password';
  visible = false;

  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;

  constructor(private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,
      private cd: ChangeDetectorRef,
    private http: HttpClient,
      private translatService: TranslateService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
    });
  }

  CreateAccount() {
    this.userToCreate.langue = this.translatService.currentLang;
        let body = JSON.stringify(this.userToCreate);
        this.http.post(environment.apiURL +'User/Register', body, httpOptions).subscribe(
            (result: any) => {
            this.dialog.open(DialogResultRegisterComponent, {
              width: '450px',
              height: '300px',
              
                data: result 
              });
            
            },
          (err) => { console.log(err); }
        );
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
