import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DeleteComponent } from './delete/delete.component';
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:'accounts',component:AccountListComponent},
  {path:'create-account',component:CreateAccountComponent},
  {path:'search-account',component:SearchComponent},
  {path:'deposit/:id',component:DepositComponent},
  // {path:"",redirectTo:'accounts',pathMatch:'full'},
  {path:"withdraw/:id",component:WithdrawComponent},
  {path:"delete/:id",component:DeleteComponent},
  {path:"view/:id",component:ViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
