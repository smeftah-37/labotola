import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./userInfo";
@Injectable(
    {
        providedIn: 'root'
    }
)
export class UserService{
    
    private apiServerUrl = 'http://localhost:8080';
    constructor(private http: HttpClient) { }
    async submitLogin(username: string, password: string)
    {
        const data = {username,password};
        return this.http.post<any>(`${this.apiServerUrl}/api/User/coord`,data);    
    }
    async submitSignUp(user : User)
    {
        return this.http.post<any>(`${this.apiServerUrl}/users/`,user);
    }
}