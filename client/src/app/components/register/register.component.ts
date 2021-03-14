import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  form :FormGroup;
  submit = false;

  constructor(
    private formBuilder : FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
        email: ['',Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30)
        ])],
        username:   ['',Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15)
        ])],
        password:   ['',Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(35)
        ])],
        confirmPassword:   ['',Validators.required],
        phone:   ['',Validators.required],

      }

    )
  }

  onRegisterSubmit() {
    console.log(this.form);
    this.createForm();
  }



  ngOnInit(): void {
  }

}
