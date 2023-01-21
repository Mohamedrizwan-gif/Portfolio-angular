import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { environment } from 'src/app/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public name = new FormControl('', [Validators.required]);
  public email = new FormControl('', [Validators.required, Validators.email]);
  public message = new FormControl('', [Validators.required]);
  public error = {
    name: false,
    email: false,
    message: false
  }
  constructor(private http: HttpClient) { }

  getErrorMessage() {
    return 'Please fill out these field';
  }

  onSend(): void {
    if (this.name.valid && this.email.valid && this.message.valid) {
      let body = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
      }
      this.http.post(environment.portfoliourl, body).subscribe(data => {
        if(Object.keys(data).length !== 0) {
          this.name.setValue('');
          this.email.setValue('');
          this.message.setValue('');
          alert('Thank you for the response');
          this.name.markAsUntouched();  
          this.email.markAsUntouched();
          this.message.markAsUntouched();
        }
      })
    }
    else {
      if(this.name.value?.length === 0) {
        this.error.name = true;
        this.name.markAsTouched();
        this.name.markAsDirty();
      }
      if(this.email.value?.length === 0) {
        this.error.email = true;
        this.email.markAsTouched();
        this.email.markAsDirty();
      }
      if(this.message.value?.length === 0) {
        this.error.message = true;
        this.message.markAsTouched();
        this.message.markAsDirty();
      }
    }
  }
}