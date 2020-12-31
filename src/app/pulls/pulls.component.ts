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
  public valueTitle: string = '';
  public valueDescr: string = '';
  public selectedBaseBranch: string = '';
  public selectedCompareBranch: string = '';
  public errorCreatePull: string = '';
  
  constructor(private _getApis: GetApiService) { }

  ngOnInit() {
    this._getApis.getBranchList().subscribe(
      (listBranches:any) => {        
        this.branchList = listBranches.map(x=> x.name);                
      });
  }

  changeBranchBase(e){    
    this.selectedBaseBranch = e.target.value
  }

  changeBranchCompare(e){
    
    this.selectedCompareBranch = e.target.value
  }

  openModalTitle(){
    $('#myModalCreatePull').modal('show');
    
  }
  createPullRequest(){
    try{
  let title = this.valueTitle;
  let description = this.valueDescr;  
  if(title != '' && description != ''){
  this._getApis.createPullRequest(title, description, this.selectedBaseBranch, this.selectedCompareBranch).subscribe( 
    (response: any) => {
console.log(response)
  },
   error => {     
     this.errorCreatePull = error.error.errors[0].message;

    } 
   )
}
else
alert('se debe de insertar un titulo y descripcion');
}
catch(ex){console.log(ex, 'jlkhkjhkjh')}
  }

}
