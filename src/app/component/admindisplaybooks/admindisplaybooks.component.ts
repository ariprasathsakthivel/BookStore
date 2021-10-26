import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookserviceService } from 'src/app/services/BookService/bookservice.service';
import { AdminaddnewbookComponent } from '../adminaddnewbook/adminaddnewbook.component';
import { AdmintoolsComponent } from '../admintools/admintools.component';

@Component({
  selector: 'app-admindisplaybooks',
  templateUrl: './admindisplaybooks.component.html',
  styleUrls: ['./admindisplaybooks.component.scss']
})
export class AdmindisplaybooksComponent implements OnInit {


  books: any;
  bookscount: any;


  constructor(private bookservice: BookserviceService, private dialog: MatDialog) { }

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

  openDialog(book:any) {
    const dialogRef = this.dialog.open(AdmintoolsComponent, {
      width: '100%',
      height: "fit-content",
      data: {
        element: book
      }
    });
    console.log("opening-->",book);
    
    dialogRef.afterClosed().subscribe(() => {
      console.log("closed");
      this.displaybooks();
    });
  }



  newbook() {
    const dialogRef = this.dialog.open(AdminaddnewbookComponent, {
      width: '100%',
      height: "fit-content",
    });
    console.log("opening-->");
    
    dialogRef.afterClosed().subscribe(() => {
      console.log("closed");
      this.displaybooks();
    });
  }


}
