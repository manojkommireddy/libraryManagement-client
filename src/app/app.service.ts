import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class AppService {
  apiUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) {
  }

  addEntertainment(entertainment: any) {
    let entertainments = [];
    entertainments.push(entertainment);
    this.httpClient.post(this.apiUrl+'/saveEntertainments', entertainments).subscribe();
  }
  addBooks(book:any){
    let books=[];
    books.push(book);
    this.httpClient.post(this.apiUrl+'/saveBooks',books).subscribe();
  }
}
