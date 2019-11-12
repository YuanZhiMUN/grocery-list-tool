import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemDetailsComponent } from './item-details/item-details.component';


const routes: Routes = [
  {path:'dashboard', component: DashboardComponent},
  {path:'itemlist', component: ItemlistComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'details/:name', component: ItemDetailsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
