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
}
