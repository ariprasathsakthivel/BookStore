import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  URL=environment.BaseURL;
  constructor(private httpservice:HttpServiceService) { }

  registerservice(payload:any){
    let header=new HttpHeaders(
      {
      "Content-Type":"application/json"
      }
    )
    return this.httpservice.postService(this.URL + "/bookstore_user/registration", payload, false, header)

  }

  loginservice(payload:any){
    let header=new HttpHeaders(
      {
      "Content-Type":"application/json"
      }
    )
    return this.httpservice.postService(this.URL +"/bookstore_user/login",payload,false,header)
  }

}
