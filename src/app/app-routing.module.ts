import { PlaceorderComponent } from './placeorder/placeorder.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'dashboard', component: DashboardComponent},
  {path:'Admin', component: AdminComponent },
  {path:'cart', component: CartComponent},
  {path:'placeorder', component: PlaceorderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
