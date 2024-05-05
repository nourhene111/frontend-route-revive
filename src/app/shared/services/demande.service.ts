import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DEMANDE_URL } from '../config/url.config';

@Injectable()
export class DemandeService {
     config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

    constructor(private http: HttpClient) {
    }

    getAllDemande(){
        return this.http.get(`${DEMANDE_URL}/getListDemande`)
    }
    getDemandeDetails(id){
      return this.http.get(`${DEMANDE_URL}/${id}`)
  }

    getMyDemande(){
        return this.http.get(`${DEMANDE_URL}/getMyDemande`)
    }

    

    createDemande(data){
        console.log(data);
          const formData = new FormData();
          formData.append('localisation', data.data.localisation);
          formData.append('description', data.data.description);
          formData.append('file', data.file);
         
         //       return this.http.post(`http://localhost:8000/upload`, formData)

       return this.http.post(`${DEMANDE_URL}/create`,{localisation:data.data.localisation,description:data.data.description})
    } 
}