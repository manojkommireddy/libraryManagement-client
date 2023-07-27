import { Component } from '@angular/core';
@Component({
  selector: 'library-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.less']
})

export class SignUpComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

}




