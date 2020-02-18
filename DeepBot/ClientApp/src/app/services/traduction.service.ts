import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TranslateService, USE_DEFAULT_LANG } from "@ngx-translate/core";
import { Subject } from "rxjs";
import { UserService } from './user.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TraductionService {
  private _langueCourante = new Subject<string>();
  langueCourante$ = this._langueCourante.asObservable();

  constructor( private http: HttpClient, public translate: TranslateService) {
    const defaultLanguage = 'fr';
    translate.setDefaultLang(defaultLanguage);
    let langUser = 'fr'; /* récupérer langue de l'utilisateur  depuis user dans store*/
    if (false) {    /* Si langue de l'utilisateur  depuis user dans store != null */
      this.changLang('', false) /* remplacer '' par langue user */
    }

    }

  changLang(langueSelectionnee: string, isUpdate: boolean = true) {
    if (isUpdate) {
    /* update user.langue */
    /* update UserDB via API */
    }
    this._langueCourante.next(langueSelectionnee);
    this.translate.setDefaultLang(langueSelectionnee);
    this.translate.use(langueSelectionnee);

  }
}
