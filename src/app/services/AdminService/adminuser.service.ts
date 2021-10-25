import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminuserService {

  
  URL = environment.BaseURL;

  constructor(private http:HttpServiceService) { }


  adminregisterservice(payload:any){
    let header = new HttpHeaders(
      {
        "Content-Type": "application/json"
      }
    )
    return this.http.postService(this.URL + "/bookstore_user/admin/registration",payload,false,header);
  }
  adminloginservice(payload:any){
    let header = new HttpHeaders(
      {
        "Content-Type": "application/json"
      }
    )
    return this.http.postService(this.URL + "/bookstore_user/admin/login",payload,false,header);
  }
}
