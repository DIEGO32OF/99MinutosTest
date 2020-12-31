import { Component, OnInit } from '@angular/core';
import {GetApiService} from '../Services/get-api.service';

declare var $:any;

@Component({
  selector: 'app-pulls',
  templateUrl: './pulls.component.html',
  styleUrls: ['./pulls.component.css']
})
export class PullsComponent implements OnInit {
  public branchList: any[] = [];
  constructor(private _getApis: GetApiService) { }

  ngOnInit() {
    this._getApis.getBranchList().subscribe(
      (listBranches:any) => {        
        this.branchList = listBranches.map(x=> x.name);        
        console.log(listBranches, this.branchList)
      });
  }

  changeBranchBase(e){
    console.log(e.target.value)
  }

  changeBranchCompare(e){
    console.log(e.target.value)
  }

  openModalTitle(){
    $('#myModalCreatePull').modal('show');
    
  }
  createPullRequest(){
    try{
  this._getApis.createPullRequest('un titulo prueba','','master', 'localBranch').subscribe( 
    (response: any) => {
console.log(response)
  })
}
catch(ex){console.log(ex, 'jlkhkjhkjh')}
  }

}
