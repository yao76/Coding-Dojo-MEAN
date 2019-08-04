import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component'; 
import { ProductComponent } from './product/product.component';
import { EditComponent } from './edit/edit.component';





const routes: Routes = [
  {path: "", component : HomeComponent},
  {path: "products", component: ProductComponent},
  {path: "products/new", component: NewComponent},
  {path: "products/edit/:id", component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
