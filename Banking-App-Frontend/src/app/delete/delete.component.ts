import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {

  id:number=0;

  deleted=false;

  account:Account=new Account();

  constructor(private accountservice:AccountService,private route:ActivatedRoute,private router:Router){
   
  }

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.accountservice.getAccountbyid(this.id).subscribe(data=>{
      this.account=data;
    })
  }
  onSubmit(){

  
    this.accountservice.deleteAccountbyid(this.id).subscribe(data=>{
      this.account=data;
      this.deleted=true;
      setTimeout(() => {
        this.router.navigate(['/accounts']);
      }, 2000);
     
    })
  }
}
