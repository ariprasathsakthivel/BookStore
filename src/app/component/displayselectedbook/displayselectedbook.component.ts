import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookserviceService } from 'src/app/services/BookService/bookservice.service';

@Component({
  selector: 'app-displayselectedbook',
  templateUrl: './displayselectedbook.component.html',
  styleUrls: ['./displayselectedbook.component.scss']
})
export class DisplayselectedbookComponent implements OnInit {

  bookID:any;
  books:any;
  data:any;
  ordercount=0;
  addtobaghide:boolean=true;
  counthide:boolean=false;
  review:any;

  constructor(private bookservice:BookserviceService, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
 
    this.bookID = localStorage.getItem("bookID");
    console.log(this.bookID);
    this.bookdetail();
  }


  bookdetail(){
    this.bookservice.getallbooks().subscribe(
      (response: any) => {
        console.log(response.result, response.result.length);
        response.result.forEach((element: any) => {
          if (element._id == this.bookID) {
            this.data = element;
          }
        });
      },
      (error) => console.log(error)
    )
  }

  addtobagbuttonhide(){
    this.addtobaghide=false;
    this.counthide=true;
    this.bookservice.addcartitem(this.data._id).subscribe(
      (response)=>console.log(response),
      (error)=>console.log(error)
    )
    
  }

  countincrease(){
    this.ordercount+=1
    this.updateCount()
  }
  countdecrease(){
    if (this.ordercount>0){
      this.ordercount-=1;
      this.updateCount()
    }
    else{
      return;
    }
  }

  updateCount(){
    let payload={
      "quantityToBuy": this.ordercount
    }
    this.bookservice.updateitemcount(this.data._id,payload).subscribe(
      (response)=>console.log(response),
      (error)=>console.log(error)
      
      
    )
  }

  addtowishlist(){
    this.bookservice.addwishlist(this.data._id).subscribe(
      (response:any)=>{console.log(response);
        this.snackbar.open(response.message, "close", {
          duration: 1800,
        })},
      (error)=>console.log(error)
      
    )
  }



  
}
