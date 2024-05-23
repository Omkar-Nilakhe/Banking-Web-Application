import { Component } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css'
})
export class WithdrawComponent {

  account:Account=new Account();
  id:number=0;

  amountDebited=false;
  errorMessage="";

  constructor(private accountservice:AccountService,private route:Router,private rout:ActivatedRoute){}

  ngOnInit(){
    this.id=this.rout.snapshot.params['id'];
    this.accountservice.getAccountbyid(this.id).subscribe(data=>{
      this.account=data;
    })

  }
  onSubmit(){

    if(this.isValid(this.account.balance)){
    this.accountservice.withdraw(this.account.id,this.account.balance).subscribe(data=>{
      this.account=data;
      this.amountDebited=true;
      setTimeout(() => {
        this.route.navigate(['/accounts']);
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
