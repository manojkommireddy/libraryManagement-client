import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";




@Injectable({
  providedIn:'root'
})
export class AppService{
  apiUrl="http://localhost:8088";
  constructor(private httpClient:HttpClient) {
  }
  addBooks(book:any){
    let books=[];
    books.push(book);
    this.httpClient.post(this.apiUrl+'/saveBooks',books).subscribe();

  }
}
