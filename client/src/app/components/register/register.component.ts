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
          Validators.maxLength(30),
          this.validateEmail
        ])],
        username:   ['',Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
          this.validateUserName
        ])],
        password:   ['',Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(35),
          this.validatePassword
        ])],
        confirmPassword:   ['',Validators.required],
        phone:   ['',Validators.required],

      },{validator:this.matchingPasswords('password','confirmPassword')}

    )
  }

  validateEmail(controls:any) {
    const regExp = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if(regExp.test(controls.value)) {
      return null;
    }
    else {
      return {'validateEmail':true};
    }
  }

  validateUserName(controls:any) {
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    if(regExp.test(controls.value)) {
      return null;
    }
    else {
      return {'validateUserName':true}
    }
  }

  validatePassword(controls:any) {
    const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
    if(regExp.test(controls.value)) {
      return null;
    }
    else {
      return {'validatePassword':true}
    }
  }

  matchingPasswords(password:any, confirmPassword:any) {
    return (group: FormGroup)=>{
      if(group.controls[password].value == group.controls[confirmPassword].value) {
        return null;
      }
      else {
        return {'matchingPasswords':true}
      }
    }
  }

  onRegisterSubmit() {
    console.log(this.form);
    this.createForm();
  }



  ngOnInit(): void {
  }

}
