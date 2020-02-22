import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
    selector: 'app-dialog-result-register',
    templateUrl: './dialog-result-register.component.html',
    styleUrls: ['./dialog-result-register.component.scss']
})
/** dialog-result-register component*/
export class DialogResultRegisterComponent implements OnInit {
  message: string;
  type: string;
    /** dialog-result-register ctor */
  constructor(public dialogRef: MatDialogRef<DialogResultRegisterComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
    console.log(data);
    if (data === "AlreadyCreated") {
      this.type = "Création du compte échoué";
      this.message = "Un compte avec le même E-mail et/ou identifiant a déja été créé."
    }
    else if (data === "MailSent") {
      this.type = "Création du compte avec succés";
      this.message = "Un email de confirmation a été envoyé sur l'adresse mail renseignée."
    }
    else if (data === "MailFailed") {
      this.type = "Création du compte échoué";
      this.message = "L'email de confirmation n'a pas pu être envoyer sur l'adresse mail renseignée, veuillez contacter le support."
    }
    else if (data === "RegisterError") {
      this.type = "Création du compte échoué";
      this.message = "Une erreur est survenu lors de la création de votre compte, veuillez contacter le support."
    }
    else if (data == "succes") {
      this.type = "Succés confirmation de l'Email";
      this.message = "Votre compte a été créé avec succés, vous pouvez maintenant vous connecter";
    }
  }

  ngOnInit() {

  }
  Close(): void {
    this.dialogRef.close();
  }
}
