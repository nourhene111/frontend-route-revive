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

     getPlanificationDemande(id){
      return this.http.get(`${PLANIFICATION_URL}/getPlanificationDemande/${id}`)

     }

     updateEquipe(id,equipeID){
      return this.http.put(`${PLANIFICATION_URL}/planEquipe/${id}`,{equipeID:equipeID})
     }

     updateEquipement(id,equipementID){
      return this.http.put(`${PLANIFICATION_URL}/planEquipement/${id}`,{equipementID:equipementID})
     }

     updateVehicule(id,vehiculeID){
      return this.http.put(`${PLANIFICATION_URL}/planVehicule/${id}`,{vehiculeID:vehiculeID})
     }
}