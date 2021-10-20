import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/services/BookService/bookservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
  
})
export class DashboardComponent implements OnInit {

  constructor(private bookservice:BookserviceService, private routes:Router) { }

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




}
