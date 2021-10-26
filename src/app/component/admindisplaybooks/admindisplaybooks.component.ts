import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/services/BookService/bookservice.service';

@Component({
  selector: 'app-admindisplaybooks',
  templateUrl: './admindisplaybooks.component.html',
  styleUrls: ['./admindisplaybooks.component.scss']
})
export class AdmindisplaybooksComponent implements OnInit {


  books: any;
  bookscount: any;


  constructor(private bookservice: BookserviceService) { }

  ngOnInit(): void {
    this.displaybooks();

  }


  displaybooks() {
    this.bookservice.getallbooks().subscribe(
      (response: any) => {
        console.log(response.result, response.result.length);
        this.books = response.result;
        this.bookscount = response.result.length
      },
      (error) => console.log(error)
    )
  }
}
