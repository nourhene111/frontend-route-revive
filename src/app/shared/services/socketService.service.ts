import { Injectable } from '@angular/core';
import  {io}  from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifService {
    socket :any;

    constructor() {
        this.socket =  io('http://localhost:3000', {
            transportOptions: {
              polling: {
                extraHeaders: {
                  Authorization: localStorage.getItem('token')
                }
              }
            }
          });
         
          console.log("init");
    }

    listen(Eventname : string){
        return new Observable((subscriber)=>{
            this.socket.on(Eventname,(data)=>{
                subscriber.next(data);
            })
        })
    }
}