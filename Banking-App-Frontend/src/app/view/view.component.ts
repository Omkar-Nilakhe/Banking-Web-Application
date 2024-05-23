import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';
import { Account } from '../account';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  id:number=0;
  account:Account=new Account();

  constructor(private route:ActivatedRoute,private accountservice:AccountService){

  }

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.accountservice.getAccountbyid(this.id).subscribe(data=>{
      this.account=data;
    })

  }

}
