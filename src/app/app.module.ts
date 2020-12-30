import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BranchesComponent } from './branches/branches.component';
import { RouterModule} from '@angular/router';
import {routing,appRoutingProviders} from './app.routing';
import { PullsComponent } from './pulls/pulls.component';



@NgModule({
  declarations: [
    AppComponent,
    BranchesComponent,
    PullsComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
