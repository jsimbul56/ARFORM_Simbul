import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'ARForm';
  userName: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  submitted: boolean = false;

  // Updated form group with new form controls
  formdata: FormGroup = new FormGroup({
    userName: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    confirmPassword: new FormControl("")
  });

  // Updated onClickSubmit method to handle all form fields
  onClickSubmit(data: { userName: string, email: string, password: string, confirmPassword: string }) {
    this.userName = data.userName;
    this.email = data.email;
    this.password = data.password;
    this.confirmPassword = data.confirmPassword;
    this.submitted = true;
    
    // You can also handle further logic here, e.g., validating password match
    console.log('Form submitted:', data);
  }
}
