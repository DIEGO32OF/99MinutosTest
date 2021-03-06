import { Component, OnInit } from '@angular/core';
import {GetApiService} from '../Services/get-api.service';

declare var $:any;

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  providers:[GetApiService],
})
export class BranchesComponent implements OnInit {


  public branchList: any[] = [];
  public branchCommitList: any

  constructor(private _getApis: GetApiService) {
   
   }

  ngOnInit() {    
     this._getApis.getBranchList().subscribe(
      (listBranches:any) => {
        this.branchList = listBranches;        
      });
    

  }

  openCommits(urlCommit){    
    this._getApis.getCommitsFromBranch(urlCommit).subscribe(
      (listCommitBranch: any) =>{              
        this.branchCommitList = listCommitBranch;
        $('#myModalListCommit').modal('show');
        
      })
  }

}
