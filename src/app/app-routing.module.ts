import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaAddComponent } from './pizzashop/pizza-add/pizza-add.component';
import { PizzaListComponent } from './pizzashop/pizza-list/pizza-list.component';
import { PizzaDeleteComponent } from './pizzashop/pizza-delete/pizza-delete.component';

const routes: Routes = [
  {path:'cart',component:PizzaAddComponent},
  {path:'cart/delete',component:PizzaDeleteComponent},
  {path:'pizza/pizza-list',component:PizzaListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
