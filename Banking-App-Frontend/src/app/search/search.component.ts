import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../account';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  inputname="";
  account:Account[]=[];
 

  constructor(private accountservice:AccountService,private route:ActivatedRoute){
    
  }
  onSubmit(){
    
    this.accountservice.getAccountbyname(this.inputname).subscribe(data=>{
      this.account=data;
   
    })

  }

}
