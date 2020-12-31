import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BranchesComponent} from './branches/branches.component';
import { PullsComponent } from './pulls/pulls.component';
import { PullListComponent } from './pull-list/pull-list.component';

const appRoutes:Routes=[
    {path:'', component: BranchesComponent},
    {path:'branches', component: BranchesComponent},
    {path:'pulls', component: PullsComponent},    
    {path:'listpull', component: PullListComponent}
    
];


export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);