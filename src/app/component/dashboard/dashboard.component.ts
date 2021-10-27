import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/services/BookService/bookservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
  
})
export class DashboardComponent implements OnInit {

  badgenum: any=0;

  constructor(private routes:Router, private bookservice:BookserviceService) { }

  ngOnInit(): void { 
    this.bookservice.getCartItems().subscribe(
      (response: any) => { console.log(response.result);
        this.badgenum = response.result.length;
      console.log(this.badgenum);}
    )
    
    
  }

  home(){
    this.routes.navigateByUrl("/home/books");
    this.ngOnInit();
  }

  loginSignup(){
    this.routes.navigateByUrl("/loginsignup");
  }

  wishlist(){
    this.routes.navigateByUrl("/home/wishlist");
  }

  mycart(){
    this.routes.navigateByUrl("/home/mycart");
    this.ngOnInit();
  }




}
