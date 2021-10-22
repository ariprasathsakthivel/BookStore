import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/services/BookService/bookservice.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
  cartitems:any;
  count:any;
  ordercount: any;
  step1: any;
  step1button: boolean=true;
  step2: any;
  step2button: boolean=true;
  fullname:any;
  mobilenumber:any;
  address:any;
  disabled:boolean=true;

  orderlist:any=[];

  constructor( private bookservice:BookserviceService,private routes:Router) { }

  ngOnInit(): void {
    this.cartitemslist()
    
  }



  setStep(index:any) {
    if (index==1){
      this.step1=true;
      this.step1button=false;
    }
    else if (index==2){
      this.step2=true;
      this.step2button=false;
    }

  }




  cartitemslist(){
    this.bookservice.getCartItems().subscribe(
      (response: any) => {
        console.log(response); this.cartitems = response.result; this.count = response.result.length; console.log(this.cartitems);
        this.fullname=this.cartitems[0].user_id.fullName;
        this.mobilenumber = this.cartitems[0].user_id.phone;
        this.address=this.cartitems[0].user_id.address;
      },
      (error) => console.log(error)


    )
  }



  countincrease(data:any) {
    this.ordercount=data.quantityToBuy;
    this.ordercount += 1
    console.log("increased",this.ordercount);
    
    this.updateCount(data)
  }
  countdecrease(data:any) {
    this.ordercount = data.quantityToBuy;
    if (this.ordercount > 0) {
      this.ordercount -= 1;
    }
    else {
      return;
    }
    this.updateCount(data)

  }

  updateCount(data:any) {
    let payload = {
      "quantityToBuy": this.ordercount
    }
    console.log("updated",this.ordercount);
    console.log(data._id);
    this.bookservice.updateitemcount(data.product_id._id, payload).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
    this.cartitemslist()

  }

  removecartitem(data:any){
    this.bookservice.removecartitem(data._id).subscribe(
      (response)=>{console.log(response);this.cartitemslist()},
      (error)=>console.log(error)
      
      
    )
  }

  enable(){
    this.disabled=false;
  }


  checkout(){

    this.cartitems.forEach((element:any) => {
      this.orderlist.push(
        {
          "product_id": element.product_id._id,
          "product_name": element.product_id.bookName,
          "product_quantity": element.quantityToBuy,
          "product_price": element.product_id.price - element.product_id.discountPrice
        }
      );
    });
    console.log(this.orderlist);
    

    let payload = {
      "orders": this.orderlist
    }
    this.bookservice.orderplace(payload).subscribe(
      (response) => { console.log(response); this.routes.navigateByUrl("/home/orderplaced")},
      (error)=>console.log(error)
            
    )
  }

}
