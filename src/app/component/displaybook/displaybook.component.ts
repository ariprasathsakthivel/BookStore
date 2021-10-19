import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/services/BookService/bookservice.service';

@Component({
  selector: 'app-displaybook',
  templateUrl: './displaybook.component.html',
  styleUrls: ['./displaybook.component.scss']
})
export class DisplaybookComponent implements OnInit {

  books:any;
  bookscount:any;
  selectedValue:any;
  box:any;



  constructor(private bookservice:BookserviceService) { }

  ngOnInit(): void {
    this.displaybooks();
      this.box=[
    {"value":"Sort by relevance"},
    {"value":"Sort by popularity"}
  ];
  this.selectedValue=this.box[0].value;
  }


  displaybooks() {
    this.bookservice.getallbooks().subscribe(
      (response: any) => {console.log(response.result,response.result.length);
      this.books=response.result; this.bookscount=response.result.length},
      (error) => console.log(error)


    )
  }
}
