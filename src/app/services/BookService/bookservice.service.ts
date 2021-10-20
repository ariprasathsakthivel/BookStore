import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  baseURL=environment.BaseURL;
  token:any;
  constructor(private http:HttpServiceService) { 
    this.token=localStorage.getItem('token')
    console.log(this.token);
    
  }

  getallbooks(){
    let header=new HttpHeaders(
      {
        "Content-Type": "application/json",
        "Authorization":this.token
      }
    )
    return this.http.getService(this.baseURL +"/bookstore_user/get/book",true,header)
  }


  getwishlist(){
    this.token = localStorage.getItem('token')

    let header=new HttpHeaders(
      {
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      }
    )
    
    return this.http.getService(this.baseURL +"/bookstore_user/get_wishlist_items",true,header)
  }



}
