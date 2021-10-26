import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminuserService {

  
  URL = environment.BaseURL;
  token:any;

  constructor(private http:HttpServiceService) {
    this.token = localStorage.getItem("token")
   }


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
  adminupdatebookservice(payload: any, product_id:any){
    let header = {
      headers: new HttpHeaders(
        {
          'x-access-token': this.token,
          'Content-Type': 'application/json'
        }
      )
    }
    return this.http.putService(this.URL + "/bookstore_user/admin/update/book/" + product_id,payload,true,header);
  }
  admindeletebookservice(product_id:any){
    let header = {
      headers: new HttpHeaders(
        {
          'x-access-token': this.token,
          'Content-Type': 'application/json'
        }
      )
    }
    return this.http.deleteService(this.URL + "/bookstore_user/admin/delete/book/" + product_id,null,true,header);
  }


  adminnewbookservice(payload:any){
    let header = {
      headers: new HttpHeaders(
        {
          'x-access-token': this.token,
          'Content-Type': 'application/json'
        }
      )
    }
    return this.http.postService(this.URL + "/bookstore_user/admin/add/book",payload,true,header);
  }


  

}
