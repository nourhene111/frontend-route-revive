import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  RESOURCE_URL } from '../config/url.config';

@Injectable()
export class ResourceService {
 

    constructor(private http: HttpClient) {
    }

    getAllEquipe(){
        return this.http.get(`${RESOURCE_URL}/equipe`)
    }

    getPendingEquipe(){
        return this.http.get(`${RESOURCE_URL}/equipe/getPending`)
    }

    getPendingEquipement(){
        return this.http.get(`${RESOURCE_URL}/equipement/getPending`)
    }

    getPendingVehicule(){
        return this.http.get(`${RESOURCE_URL}/vehicule/getPending`)
    }

    getAllVehicule(){
        return this.http.get(`${RESOURCE_URL}/vehicule`)
    }
    getAllEquipement(){
        return this.http.get(`${RESOURCE_URL}/equipement`)
    }

    createVehicule(data){
        return this.http.post(`${RESOURCE_URL}/vehicule/create`,data)
    }
    
    createEquipement(data){
        return this.http.post(`${RESOURCE_URL}/equipement/create`,data) 
    }
    createEquipe(data){
        return this.http.post(`${RESOURCE_URL}/equipe/create`,data)
    }

     
}