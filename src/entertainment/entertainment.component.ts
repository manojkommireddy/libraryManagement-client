import {Component} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {AppService} from "../app/app.service";

@Component({
  selector: 'library-entertainment',
  templateUrl:'./entertainment.component.html',
  styleUrls:['./entertainment.component.less']
  })
export class EntertainmentComponent{

  // @ts-ignore
  entertainmentFormGroup : FormGroup;

  constructor(private appService: AppService) {
  }

  ngOnInit(){
    this.entertainmentFormGroup = new FormGroup({
      name: new FormControl(),
      type: new FormControl(),
      price: new FormControl(),
      rent: new FormControl(),
      available:new FormControl()
    })
  }

  addEntertainment(entertainment: any) {
    this.appService.addEntertainment(entertainment);
  }
}
