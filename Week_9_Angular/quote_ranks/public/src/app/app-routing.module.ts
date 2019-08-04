import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { QuoteComponent } from './quote/quote.component';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';







const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "new", component: NewComponent},
  {path: "edit/:_id", component: EditComponent},
  {path: "quotes/:_id", component: QuoteComponent},
  {path: "write/:_id", component: NewQuoteComponent},
  {path: "quotes/edit/:_id/:idx", component: EditQuoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
