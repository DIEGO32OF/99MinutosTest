import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BranchesComponent } from './branches/branches.component';
import { RouterModule} from '@angular/router';
import {routing,appRoutingProviders} from './app.routing';
import { PullsComponent } from './pulls/pulls.component';
import { PullListComponent } from './pull-list/pull-list.component';



@NgModule({
  declarations: [
    AppComponent,
    BranchesComponent,
    PullsComponent,
    PullListComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
