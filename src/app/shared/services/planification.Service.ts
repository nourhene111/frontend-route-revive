import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  PLANIFICATION_URL } from '../config/url.config';

@Injectable()
export class PlanificationService {
 

    constructor(private http: HttpClient) {
    }

     updatePeriority(id,state){
       return this.http.patch(`${PLANIFICATION_URL}/updatePriority/${id}`,{preiority:state})
      }

     
}