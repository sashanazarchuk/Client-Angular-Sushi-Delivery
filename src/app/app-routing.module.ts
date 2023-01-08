import { NgModule } from '@angular/core';
import { AuthComponent } from './components/auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateFoodComponent } from './components/create-food/create-food.component';
import { MainComponent } from './components/main/main.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { CartComponent } from './components/cart/cart.component';
import { AddresComponent } from './components/address/address.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'create', component: CreateFoodComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'cart', component: CartComponent },
  { path: 'address', component: AddresComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
