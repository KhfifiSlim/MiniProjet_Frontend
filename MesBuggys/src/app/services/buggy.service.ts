import { Injectable } from '@angular/core';
import { Buggy } from '../model/buggy';
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = { headers: new HttpHeaders( {'Content-Type': 'application/json'} ) };
@Injectable({
  providedIn: 'root'
})
export class BuggyService {
  apiURL: string = 'http://localhost:8085/buggys/api';
  buggys!: Buggy[];

 buggy! : Buggy;

 
  constructor(private http : HttpClient) {
    /*this.buggys=[
      { idBuggy : 1, nomBuggy : "PC Asus", prixBuggy : 3000.600, dateCreation : new Date("01/14/2011")},
      { idBuggy : 2, nomBuggy : "PC Asus", prixBuggy : 3000.600, dateCreation : new Date("01/14/2011")},
      { idBuggy : 3, nomBuggy : "PC Asus", prixBuggy : 3000.600, dateCreation : new Date("01/14/2011")}
    ];*/
   }



  listeBuggy(): Observable<Buggy[]>{ 
    return this.http.get<Buggy[]>(this.apiURL); }



    ajouterBuggy( bug: Buggy):Observable<Buggy>{ 
      return this.http.post<Buggy>(this.apiURL, bug, httpOptions); }
  
  
  
  
  
      supprimerBuggy(id : number) { 
        const url = `${this.apiURL}/${id}`; 
        return this.http.delete(url, httpOptions); }


        consulterBuggy(id: number): Observable<Buggy> { 
          const url = `${this.apiURL}/${id}`; 
          return this.http.get<Buggy>(url); }

     

        trierBuggys(){
           this.buggys = this.buggys.sort((n1,n2) => { if (n1.idBuggy > n2.idBuggy) { return 1;
           } if (n1.idBuggy < n2.idBuggy) { return -1;
           } return 0; }); } 

           updateBuggy(bug :Buggy) : Observable<Buggy> { 
             return this.http.put<Buggy>(this.apiURL, bug, httpOptions); }

  }
