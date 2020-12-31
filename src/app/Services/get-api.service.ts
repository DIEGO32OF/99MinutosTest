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
    let headers = new HttpHeaders({ 'Accept': 'application/vnd.github.v3+json',  'Authorization': 'token 40459b37311e2d4fd029eb200093b8326379e0a2' });
    //let headers = new HttpHeaders({ 'Accept': 'application/vnd.github.v3+json'});
    
    return this._http.post(this.urlBranch+'pulls?access_token=40459b37311e2d4fd029eb200093b8326379e0a2', params,  { headers: headers })
  }

  getAllPullRequest(){
    let headers = new HttpHeaders({ 'Accept': 'application/vnd.github.v3+json',  'Authorization': 'token 40459b37311e2d4fd029eb200093b8326379e0a2' });
        return this._http.get(this.urlBranch+'pulls?states=all',   { headers: headers })

  }

  

}
