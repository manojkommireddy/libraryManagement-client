import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'library-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  // @ts-ignore
  loginFormGroup : FormGroup;

  ngOnInit() {
    this.loginFormGroup = new FormGroup({
      userName : new FormControl('', [Validators.required]),
      password : new FormControl()
    })
  }

  login() {
    console.log(this.loginFormGroup.value);
  }
}
