import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServiceService } from 'src/app/services/userService/user-service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  formdata: any;
  hidden=false;

  constructor(private userservice:UserServiceService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.formdata=new FormGroup({
      fullname : new FormControl('', Validators.required),
      username : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required]),
      mobilenumber : new FormControl('', Validators.required)
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
      console.log(payload);

      this.userservice.registerservice(payload).subscribe(
        (response) => {
          console.log(response),
          this.snackbar.open("Registration successfull", " ", {
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
  hide() {
    this.hidden = !this.hidden;
  }
}
