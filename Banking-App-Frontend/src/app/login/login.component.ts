import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  credentials:any={
    username:"",
    password:""
  }

  constructor(private accountservice:AccountService,private router:Router){
   
  }

  onSubmit(){
    console.log(this.credentials);
    this.accountservice.LoginUser(this.credentials).subscribe(data=>{
      alert("logged in successfully....");
      this.router.navigate(['/accounts']);
    },error=>{
      alert("Plz enter correct credentials...");
    })
  }

}
