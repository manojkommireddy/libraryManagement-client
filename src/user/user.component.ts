import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppService} from "../app/app.service";

@Component({
  selector: 'library-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})

export class UserComponent {
  //@ts-ignore
  userFormGroup : FormGroup;

  constructor(private appService:AppService) {
  }

  ngOnInit() {
    this.userFormGroup = new FormGroup({
      firstName : new FormControl(),
      lastName : new FormControl(),
      userName : new FormControl(),
      password : new FormControl(),
      email : new FormControl(),
      phoneNumber: new FormControl(),
      startDate : new FormControl(),
      endDate:new FormControl(),
      active: new FormControl('true')
    })
  }

  user() {
    console.log(this.userFormGroup.value);
  }

  addUser(user:any){
    this.appService.addUser(user);
  }
}
