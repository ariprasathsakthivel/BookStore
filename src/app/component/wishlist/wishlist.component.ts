import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/services/BookService/bookservice.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(private bookservice:BookserviceService) { }

  wishlistitems:any;

  ngOnInit(): void {
    this.wishlist()
  }

  wishlist(){
    this.bookservice.getwishlist().subscribe(
      (response:any)=>{console.log(response)},
      (error)=>console.log(error)
      
    )
  }

}
