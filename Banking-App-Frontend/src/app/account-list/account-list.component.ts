import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.css'
})
export class AccountListComponent {
accounts:Account[]=[];

  constructor(private accountservice:AccountService,private router:Router){
    // this.getAccounts();  we can simply write in constr also
  }
    
ngOnInit(){
  this.getAccounts();
}

getAccounts(){
  this.accountservice.getAllAccounts().subscribe(data=>{
  
    this.accounts=data
    // alert("data fetched in to accounts..");
  },
  error=>{
    console.log(error);
    // alert("data not fetched in accounts..");


  })

}
deposit(id:number){
  this.router.navigate(['/deposit',id]);
    
}

withdraw(id:number){
  this.router.navigate(['/withdraw',id]);

}
delete(id:number){
  this.router.navigate(['/delete',id]);
}

view(id:number){
  this.router.navigate(['/view',id]);
}
}
