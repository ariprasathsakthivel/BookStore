import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  formdata: any;

  constructor(private userservice:UserServiceService) { }

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
        (response) => console.log(response),
        (error) => console.log(error)


      )
    }


    
  }
}
