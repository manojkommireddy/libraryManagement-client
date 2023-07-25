import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppService} from "../app/app.service";

@Component({
  selector: 'library-staff',
  templateUrl: './Staff.component.html',
  styleUrls: ['./Staff.component.less']
})
export class StaffComponent{
  // @ts-ignore
  staffFormGroup : FormGroup;
  constructor(private appService: AppService){

  }
  ngOnInit() {
      this.staffFormGroup = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
        userName: new FormControl(),
        password: new FormControl(),
        email: new FormControl(),
        phoneNumber: new FormControl(),
        role: new FormControl(),
        salary: new FormControl(),
        hireDate: new FormControl(),
        resignDate: new FormControl()

      })
    }
    addStaff(staff : any){
    this.appService.addStaff(staff);
    }

    staff()
    {
      console.log(this.staffFormGroup.value);
    }
  }
