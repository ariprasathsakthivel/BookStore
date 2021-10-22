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
    let header = {
      headers: new HttpHeaders(
        {
          'x-access-token': this.token,
          'Content-Type': 'application/json'
        }
      )
    }
    return this.http.getService(this.baseURL +"/bookstore_user/get/book",true,header)
  }


  getwishlist(){
    this.token = localStorage.getItem('token')

    let header = {
      headers: new HttpHeaders(
        {
          'x-access-token': this.token,
          'Content-Type': 'application/json'
        }
      )
    }
    
    return this.http.getService(this.baseURL +"/bookstore_user/get_wishlist_items",true,header)
  }

  addcartitem(productID:any){
    let header = {
      headers: new HttpHeaders(
      {
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      }
    )
    }
    return this.http.postService(this.baseURL +"/bookstore_user/add_cart_item/" + productID,null,true,header);
  }

  updateitemcount(productID:any,payload:any){
    let header = {
      headers: new HttpHeaders(
        {
          'x-access-token': this.token,
          'Content-Type': 'application/json'
        }
      )
    }
    return this.http.putService(this.baseURL +"/bookstore_user/cart_item_quantity/" + productID, payload, true, header);
  }

  getCartItems(){
    let header = {
      headers: new HttpHeaders(
        {
          'x-access-token': this.token,
          'Content-Type': 'application/json'
        }
      )
    }

    return this.http.getService(this.baseURL + "/bookstore_user/get_cart_items", true, header)
  }

  removecartitem(productID: any) {
    let header = {
      headers: new HttpHeaders(
        {
          'x-access-token': this.token,
          'Content-Type': 'application/json'
        }
      )
    }
    return this.http.deleteService(this.baseURL + "/bookstore_user/remove_cart_item/" + productID, null, true, header);
  }

  orderplace(payload:any){
    let header = {
      headers: new HttpHeaders(
        {
          'x-access-token': this.token,
          'Content-Type': 'application/json'
        }
      )
    }
    return this.http.postService(this.baseURL +"/bookstore_user/add/order", payload, true, header);
  }



  addwishlist(productID: any){
    let header = {
      headers: new HttpHeaders(
        {
          'x-access-token': this.token,
          'Content-Type': 'application/json'
        }
      )
    }
    return this.http.postService(this.baseURL + "/bookstore_user/add_wish_list/" + productID, null, true, header);
  }

  removewishlistitem(productID: any) {
    let header = {
      headers: new HttpHeaders(
        {
          'x-access-token': this.token,
          'Content-Type': 'application/json'
        }
      )
    }
    return this.http.deleteService(this.baseURL + "/bookstore_user/remove_wishlist_item/" + productID, null, true, header);
  }

}



