import { Component, Input, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/services/BookService/bookservice.service';
import { DatashareService } from 'src/app/services/Datashare/datashare.service';

@Component({
  selector: 'app-displayselectedbook',
  templateUrl: './displayselectedbook.component.html',
  styleUrls: ['./displayselectedbook.component.scss']
})
export class DisplayselectedbookComponent implements OnInit {

  data:any;
  ordercount=0;
  addtobaghide:boolean=true;
  counthide:boolean=false;

  constructor(private dataservice: DatashareService,private bookservice:BookserviceService) { }

  ngOnInit(): void {
    this.dataservice.currentMessage.subscribe((data)=>{console.log(data);
    //   this.data = {
    //     admin_user_id: "60a7dfe56ad6bc00157945f1",
    //     author: "Steve Jobs",
    //     bookImage: null,
    //     bookName: "Apple",
    //     createdAt: "2021-05-22T06:54:44.976Z",
    //     description: "Story about apple products",
    //     discountPrice: 100,
    //     price: 2000,
    //     quantity: 10,
    //     updatedAt: "2021-05-22T06:54:44.976Z",
    //     __v: 0,
    //     _id: "60a8aab496edee0015d919dc"};
    // }
    this.data=data
    }
    
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
      (response)=>console.log(response),
      (error)=>console.log(error)
      
    )
  }

  
}
