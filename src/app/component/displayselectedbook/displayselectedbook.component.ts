import { Component, Input, OnInit } from '@angular/core';
import { DatashareService } from 'src/app/services/Datashare/datashare.service';

@Component({
  selector: 'app-displayselectedbook',
  templateUrl: './displayselectedbook.component.html',
  styleUrls: ['./displayselectedbook.component.scss']
})
export class DisplayselectedbookComponent implements OnInit {

  data:any;

  constructor(private dataservice: DatashareService) { }

  ngOnInit(): void {
    this.dataservice.currentMessage.subscribe((data)=>{console.log(data);
      this.data = {
        admin_user_id: "60a7dfe56ad6bc00157945f1",
        author: "Steve Jobs",
        bookImage: null,
        bookName: "Apple",
        createdAt: "2021-05-22T06:54:44.976Z",
        description: "Story about apple products",
        discountPrice: 100,
        price: 2000,
        quantity: 10,
        updatedAt: "2021-05-22T06:54:44.976Z",
        __v: 0,
        _id: "60a8aab496edee0015d919dc"};
    }
  )
    
  }
  
}
