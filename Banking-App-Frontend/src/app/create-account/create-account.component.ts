import { Component } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {

  account:Account=new Account();
   
  accountcreate=false;
  constructor(private accountservice:AccountService,private router:Router){
    
  }

  onSubmit(){
    this.saveAccount();
  }

  saveAccount(){

    this.accountservice.createAccount(this.account).subscribe(data=>{
      console.log(data);
      this.accountcreate=true;
      setTimeout(() => {
        this.goToaccounts();
      }, 2000);
     

    })
  }

  goToaccounts(){
    this.router.navigate(['/accounts']);
  }

}
