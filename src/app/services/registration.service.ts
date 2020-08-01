import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl = "http://localhost:8080/persons";
  constructor(private _http :HttpClient) { }

  public registraionUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>(this.baseUrl, user);
  }

  public getPerson(id:number):Observable<any>{
    return this._http.get(`${this.baseUrl}/${id}`);
  }
}
