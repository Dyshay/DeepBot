import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import * as fromwebUser from 'src/app/app-reducers/webUser/reducers';
import { webUserActions } from 'src/app/app-reducers/webUser/actions';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { User } from '../../../../../webModel/User';
import { environment } from '../../../../../environments/environment';
import { TraductionService } from '../../../../services/traduction.service';
import { TranslateService } from '@ngx-translate/core';
import { DialogResultRegisterComponent } from '../register/dialog-result-register/dialog-result-register.component';
import { MatDialog } from '@angular/material';

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
    public dialog: MatDialog,
    private toastr: ToastrService,
    private store: Store<fromwebUser.State>,
    private tradService: TraductionService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.get('succes') == "succes") {
        this.dialog.open(DialogResultRegisterComponent, {
          width: '450px',
          height: '300px',
          data: "succes"
        });

      }
    });

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  send() {
    let user: User = {
      userName: this.form.controls["email"].value,
      userPassword: this.form.controls["password"].value,
      userEmail: '',
      accounts: [],
      langue: this.tradService.translate.currentLang
    };
    this.store.dispatch(webUserActions.login({ user }))
  }
  changerLangue(langue: string) {
    this.tradService.changLang(langue, false);
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
