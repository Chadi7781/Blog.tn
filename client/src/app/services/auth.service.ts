import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders, HttpRequest} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  domain = "http://localhost:8080"
  constructor(
    private http: HttpClient
  ) { }

  registerUser(user) {
    return this.http.post(this.domain + "/authentification/register/",user);
  }
}
