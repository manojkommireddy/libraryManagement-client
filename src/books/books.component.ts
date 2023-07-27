import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppService} from "../app/app.service";

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.less']
})
export class BooksComponent {
  // @ts-ignore
  booksFormGroup : FormGroup;
constructor(private appService:AppService) {
}
  ngOnInit() {
    this.booksFormGroup = new FormGroup({
      name : new FormControl('', [Validators.required]),
      author : new FormControl(),
      price : new FormControl(),
      rent : new FormControl(),
      genre:new FormControl(),
      available:new FormControl('true')
    })
  }

  books() {
    console.log(this.booksFormGroup.value);
  }
  addBooks(books:any){
  this.appService.addBooks(books);
  }

}
