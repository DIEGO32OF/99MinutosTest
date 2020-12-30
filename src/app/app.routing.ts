import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BranchesComponent} from './branches/branches.component';
import { PullsComponent } from './pulls/pulls.component';
//import { CommitBranchComponent } from './commit-branch/commit-branch.component';

const appRoutes:Routes=[
    {path:'', component: BranchesComponent},
    {path:'branches', component: BranchesComponent},
    {path:'pulls', component: PullsComponent},
    
   // {path:'commit', component: CommitBranchComponent},
    
];


export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);