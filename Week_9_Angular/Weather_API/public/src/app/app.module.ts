import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { SeattleComponent } from './seattle/seattle.component';
import { BeijingComponent } from './beijing/beijing.component';
import { DubaiComponent } from './dubai/dubai.component';
import { MoscowComponent } from './moscow/moscow.component';
import { SingaporeComponent } from './singapore/singapore.component';
import { CairoComponent } from './cairo/cairo.component';


@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    BeijingComponent,
    DubaiComponent,
    MoscowComponent,
    SingaporeComponent,
    CairoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // NgbModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
