import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class AppService{
  apiUrl = "http://localhost:8080";

  constructor(private httpClient:HttpClient) {
  }
addUser(user :any){
    let users=[];
    users.push(user);
    this.httpClient.post(this.apiUrl+'/createUsers',users).subscribe();
}
}


