import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

   private baseUrl="http://localhost:8082";
  
   getAllAccounts():Observable<Account[]>{
    return this.http.get<Account[]>(`${this.baseUrl}/allAccounts`);
   }

   createAccount(account:Account):Observable<Account>{
    return this.http.post<Account>(`${this.baseUrl}/addAccount`,account);
   }

   getAccountbyid(id:number):Observable<Account>{
    return this.http.get<Account>(`${this.baseUrl}/getAccbyid/${id}`);

   }

   deposit(id:number,amount:number):Observable<Account>{
    const request={amount};
    return this.http.put<Account>(`${this.baseUrl}/deposit/${id}`,request);
   }

   withdraw(id:number,amount:number):Observable<Account>{
    const request={amount};
    return this.http.put<Account>(`${this.baseUrl}/withdraw/${id}`,request);
   }

   
   deleteAccountbyid(id:number):Observable<Account>{
    return this.http.delete<Account>(`${this.baseUrl}/deleteAcc/${id}`);

   }

   getAccountbyname(accountHolderName:String):Observable<Account[]>{
    return this.http.get<Account[]>(`${this.baseUrl}/getaccbyahname/${accountHolderName}`);

   }
   LoginUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/login`,user);
   }

}
