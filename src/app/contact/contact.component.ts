import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormGroupDirective,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogContactComponent } from '../dialog-contact/dialog-contact.component';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, AfterViewInit {
  //contact = new Contact();

  clicked: boolean;
  messageSent = false;
  submitted = false;

  addressForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public dialog: MatDialog,
    private router: Router,
  ) {}

  endpoint: string;
  submitReport: string;
  submitComplete = false;
  resultColor: string;

  ngAfterViewInit(): void {}
  ngOnInit(): void {

    this.endpoint = "https://tim-kuntze.developerakademie.com/send_mail.php";

  }

  /**
   * Send email with contact-form-data and reset form, if form is filled correctly
   * @param formDirective
   */

  // send email to server



  async sendMail(form, formDirective) {
    try {
      const formData = new FormData();
      formData.append('name', this.addressForm.controls['name'].value);
      formData.append('email', this.addressForm.controls['email'].value);
      formData.append('message', this.addressForm.controls['message'].value);
     
      
      let url = 'http://tim-kuntze.developerakademie.com/send_mail.php';
      let response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: formData, // body data type must match "Content-Type" header
      });
      console.log(response);
      this.openDialog(true);
      //this.router.navigate(['']); 
      formDirective.resetForm(); 
      this.addressForm.reset();
    } catch (error) {
   
      console.error(error);
      this.openDialog(false);
    }
  }




  openDialog(messageSent) {
    this.messageSent = messageSent;
    this.dialog.open(DialogContactComponent, {
      data: {
        messageSent: messageSent,
      },
    });
  }

}