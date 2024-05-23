import { Component } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css'
})
export class DepositComponent {
 
  errorMessage="";

  id:number=0;
  
  amountCredited=false;
  account:Account=new Account();

  constructor(private accountservice:AccountService,private rout:ActivatedRoute,private router:Router){}

  ngOnInit(){
    this.id=this.rout.snapshot.params['id'];
    this.accountservice.getAccountbyid(this.id).subscribe(data=>{
      this.account=data;
    })
  }
  onSubmit(){

    if(this.isValid(this.account.balance)){
    this.accountservice.deposit(this.account.id,this.account.balance).subscribe(data=>{
      this.account=data;
      this.amountCredited=true;
      setTimeout(() => {
        this.router.navigate(['/accounts']);
      }, 2000);
     
    })
  }else{
    this.errorMessage="Invalid Amount....";
    setTimeout(() => {
      this.errorMessage="";
    }, 2000);
  }
}
   isValid(amount:number):boolean{
       return amount>0 && amount<100000;
   }



}
