import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
  
})
export class DashboardComponent implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit(): void { 
  }

  home(){
    this.routes.navigateByUrl("/home/books");
  }

  loginSignup(){
    this.routes.navigateByUrl("/loginsignup");
  }

  wishlist(){
    this.routes.navigateByUrl("/home/wishlist");
  }

  mycart(){
    this.routes.navigateByUrl("/home/mycart")
  }




}
