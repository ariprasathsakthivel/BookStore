import { Component, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminuserService } from 'src/app/services/AdminService/adminuser.service';
import { UserServiceService } from 'src/app/services/userService/user-service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  formdata: any;
  hidden=false;

  constructor(private userservice:UserServiceService, private adminuserservice:AdminuserService,private snackbar:MatSnackBar,private route:Router) { }

  ngOnInit(): void {
    this.formdata=new FormGroup({
      fullname : new FormControl('', Validators.required),
      username : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required]),
      mobilenumber : new FormControl('', Validators.required),
      selectedvalue: new FormControl('',Validators.required)
    });
  }


  OnSubmit(){
    let payload = {
      "fullName": this.formdata.value.fullname,
      "email": this.formdata.value.username,
      "password": this.formdata.value.password,
      "phone": this.formdata.value.mobilenumber,
      "service": "advance"
    }
    if (!this.formdata.invalid){
      if (this.formdata.value.selectedvalue =="User"){
        console.log(payload);

        this.userservice.registerservice(payload).subscribe(
          (response:any) => {
            console.log(response);
            this.snackbar.open(response.message, " ", {
              duration: 1500,
            });
          },
          (error) => {
            console.log(error)
            this.snackbar.open(error.error.message, "close", {
              duration: 1500,
            });
          }
        )
      }
      else if (this.formdata.value.selectedvalue =="Admin"){
        this.adminuserservice.adminregisterservice(payload).subscribe(
          (response:any) => {
            console.log(response),
              this.snackbar.open("Admin Registration successfull", " ", {
                duration: 1500,
              });
          },
          (error) => {
            console.log(error)
            this.snackbar.open(error.error.message, "close", {
              duration: 1500,
            });
          }
        )
      }
    }  
  }
  hide() {
    this.hidden = !this.hidden;
  }
}
