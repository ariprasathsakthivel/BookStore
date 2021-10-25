import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminuserService } from 'src/app/services/AdminService/adminuser.service';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formdata: any;
  hidden=false;
  token:any;

  constructor(private userservice:UserServiceService,private adminuserservice:AdminuserService,private snackbar:MatSnackBar,private route:Router) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      selectedvalue:new FormControl('', Validators.required)
    });
  }


  onSubmit(){
    let payload={
      "email": this.formdata.value.username,
      "password": this.formdata.value.password
    }

    if (!this.formdata.invalid) {
      if (this.formdata.value.selectedvalue == "User") {
        this.userservice.loginservice(payload).subscribe(
          (response:any) => {
            console.log(response),
              localStorage.setItem("token", response.result.accessToken),
              this.snackbar.open(response.message, "close", {
              duration: 1500,
            }),
            this.route.navigateByUrl("/home/books");
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
        this.adminuserservice.adminloginservice(payload).subscribe(
          (response: any) => {
            console.log(response),
              localStorage.setItem("token", response.result.accessToken),
              this.snackbar.open(response.message, "close", {
                duration: 1500,
              }),
              this.route.navigateByUrl("/home/books");
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

  hide(){
    this.hidden=!this.hidden;
  }
}
