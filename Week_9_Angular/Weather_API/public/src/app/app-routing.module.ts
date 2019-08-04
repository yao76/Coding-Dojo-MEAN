import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeattleComponent } from './seattle/seattle.component';
import { BeijingComponent } from './beijing/beijing.component';
import { DubaiComponent } from './dubai/dubai.component';
import { MoscowComponent } from './moscow/moscow.component';
import { SingaporeComponent } from './singapore/singapore.component';
import { CairoComponent } from './cairo/cairo.component';



const routes: Routes = [
  { path: 'seattle',component: SeattleComponent },
  { path: 'beijing',component: BeijingComponent },
  { path: 'dubai',component: DubaiComponent },
  { path: 'moscow',component: MoscowComponent },
  { path: 'singapore',component: SingaporeComponent },
  { path: 'cairo',component: CairoComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
