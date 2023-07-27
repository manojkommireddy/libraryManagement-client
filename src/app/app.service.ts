import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class AppService {
  apiUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) {
  }

  addStaff(staff: any) {
    let staffDetails = [];
    staffDetails.push(staff)
    this.httpClient.post(this.apiUrl+'/saveAllStaffDetails',staffDetails).subscribe();
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
  addUser(user :any){
    let users=[];
    users.push(user);
    this.httpClient.post(this.apiUrl+'/createUsers',users).subscribe();
  }
}
