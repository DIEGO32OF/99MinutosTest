import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GLOBAL} from './global.service';


@Injectable({
  providedIn: 'root'
})
export class GetApiService {
  public urlBranch:string;

  constructor(private _http: HttpClient) { 
    this.urlBranch = GLOBAL.url;
  }

  getBranchList(){

  let headers = new HttpHeaders({ 'Accept': 'application/vnd.github.v3+json' });
  return this._http.get(this.urlBranch+'branches',  { headers: headers })
  }

  getCommitsFromBranch(urlBranchCommit){
    let headers = new HttpHeaders({ 'Accept': 'application/vnd.github.v3+json' });
    return this._http.get(urlBranchCommit,  { headers: headers })
  }

  createPullRequest(title, description, Base, Head){
    let params=JSON.stringify({title: title, body: description, base:Base, head:Head });    
    let headers = new HttpHeaders({ 'Accept': 'application/vnd.github.v3+json',  'Authorization': 'token e491927e34ced646f4c434465198b101d3361ef8' });
    //let headers = new HttpHeaders({ 'Accept': 'application/vnd.github.v3+json'});
    console.log(params, headers)
    return this._http.post(this.urlBranch+'pulls?access_token=e491927e34ced646f4c434465198b101d3361ef8', params,  { headers: headers })
  }

  

}
