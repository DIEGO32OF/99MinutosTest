import { Component, OnInit } from '@angular/core';
import {GetApiService} from '../Services/get-api.service';


@Component({
  selector: 'app-pull-list',
  templateUrl: './pull-list.component.html',
  styleUrls: ['./pull-list.component.css']
})
export class PullListComponent implements OnInit {
  
  public pullList: any[] = [];
  public messagePullEmpty: string = ''

  constructor(private _getApis: GetApiService) { }

  ngOnInit() {
    
    this._getApis.getAllPullRequest().subscribe(
    (response: any) =>{
      console.log(response)
      if(response.length > 0){    
      this.pullList = response;
      }
      else{
        this.messagePullEmpty = 'No hay Pull Request Abiertos'
      }
    },
    error =>{ console.log(error) }
  )

  }

}
