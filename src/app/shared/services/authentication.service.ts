import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../interfaces/user.type';
import { AUTH_URL } from '../config/url.config';
import { jwtDecode } from "jwt-decode";

const USER_AUTH_API_URL = '/api-url';

@Injectable()
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<any>;
    private roleSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
    isLogged: boolean = false;

    constructor(private http: HttpClient) {

        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.roleSubject = new BehaviorSubject<String>("");

        this.currentUser = this.currentUserSubject.asObservable();
        this.initializeFromToken()

    }
    private initializeFromToken() {
        let token = localStorage.getItem('token');
        if (token) {
            const data:any=jwtDecode(token);
            this. currentUserSubject.next({id:data.id,name:data.name,email:data.email})   
            this.roleSubject.next(data.role)
            this.isLogged = true;
        }
    }

    isLoggedF() {
        return this.isLogged
    }
    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
        return this.http.post<any>(`${AUTH_URL}/security/api/auth/login`, { email, password })
            .pipe(map(res => {
               

                if (res) {
                    localStorage.setItem('token', res.accessToken);
                    const decoded = jwtDecode(res.accessToken);
                      const data:any=jwtDecode(res.accessToken);
                       this. currentUserSubject.next({id:data.id,name:data.name,email:data.email})  
                       this.roleSubject.next(data.role)  
                       this.initializeFromToken()        
                     this.isLogged = true
                 }
                return res;
            }));
    }

    logout() {
        localStorage.removeItem('token');
        this.isLogged = false
        this.currentUserSubject.next(null);
        this.roleSubject.next(null)

    }

    register(data) {
        return this.http.post<any>(`${AUTH_URL}/security/api/auth/register`, data)
    }

    getRoleValue(){
        return this.roleSubject.asObservable()
    }
    getCurrentUserValue(){
        return this.currentUserSubject.value()
    }
}

 
