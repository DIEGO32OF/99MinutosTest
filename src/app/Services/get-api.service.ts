import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GLOBAL} from './global.service';
/* Autor: Diego Rivas
Descripcion: Servicio para el llamado de Apis de Git hub */

@Injectable({
  providedIn: 'root'
})
export class GetApiService {
  public urlGeneric:string;
  public token: string


  constructor(private _http: HttpClient) { 
    this.urlGeneric = GLOBAL.url;
    this.token = GLOBAL.token;
  }

  // funcion para obtener todas las ramas de una repo publico en especifico
  getBranchList(){

  let headers = new HttpHeaders({ 'Accept': 'application/vnd.github.v3+json' });
  return this._http.get(this.urlGeneric+'branches',  { headers: headers })
  }

  // dentro de cada rama, existe la url para ver sus commits es el parametro que se le pasa
  getCommitsFromBranch(urlBranchCommit){
    let headers = new HttpHeaders({ 'Accept': 'application/vnd.github.v3+json' });
    return this._http.get(urlBranchCommit,  { headers: headers })
  }

  // funcion que sirve para crear un pull request, 
  createPullRequest(title, description, Base, Head){
    let params=JSON.stringify({title: title, body: description, base:Base, head:Head });    
    let headers = new HttpHeaders({ 'Accept': 'application/vnd.github.v3+json',  'Authorization': `'token ${this.token}'` });    
    let strPull = `pulls?access_token=${this.token}`
    console.log(this.urlGeneric, strPull)
    return this._http.post(this.urlGeneric+strPull, params,  { headers: headers })
  }

  //funcion que sirve para obtener un listado de pull requests
  getAllPullRequest(){
    let headers = new HttpHeaders({ 'Accept': 'application/vnd.github.v3+json',  'Authorization': `'token ${this.token}'` });
        return this._http.get(this.urlGeneric+'pulls?states=all',   { headers: headers })

  }  

}
