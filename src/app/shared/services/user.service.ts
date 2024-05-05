import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
 import { DEMANDE_URL, USER_URL } from '../config/url.config';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {}
    getAllUser(){
        return this.http.get(`${USER_URL}/getUserList`)
    }
    createDemande(data){   
    return this.http.post(`${USER_URL}/create`,data)
    }

    getMembrList(){
        return this.http.get(`${USER_URL}/getMembrList`) 
    }
}