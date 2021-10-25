import { Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookserviceService } from 'src/app/services/BookService/bookservice.service';
import { DatashareService } from 'src/app/services/Datashare/datashare.service';

@Component({
  selector: 'app-displaybook',
  templateUrl: './displaybook.component.html',
  styleUrls: ['./displaybook.component.scss']
})
export class DisplaybookComponent implements OnInit,OnDestroy {

  books:any;
  bookscount:any;
  selectedValue:any;
  box:any;
  

  abc: Subscription = new Subscription;




  constructor(private bookservice: BookserviceService, private route: Router) { }

  ngOnInit(): void {
    this.displaybooks();
      this.box=[
    {"value":"Sort by relevance"},
    {"value":"Sort by popularity"}
  ];
  this.selectedValue=this.box[0].value;
  }


  displaybooks() {
    this.abc=this.bookservice.getallbooks().subscribe(
      (response: any) => {console.log(response.result,response.result.length);
                          this.books=response.result;
                          this.bookscount=response.result.length},
      (error) => console.log(error)


    )
  }

  displayselected(book:any){
    this.route.navigateByUrl("/home/book");
    localStorage.setItem("bookID", book._id);
  }

  ngOnDestroy(){
    this.abc.unsubscribe();

  }


}
