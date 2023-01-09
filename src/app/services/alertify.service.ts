import { Injectable } from '@angular/core';
declare let alertify:any;
@Injectable() //global olmasını sağlar 
 //providedIn: 'root' app module içinde tanımlarsan buna gerek kalmaz ikisinden birini yap

export class AlertifyService {

  constructor() { }

  success(message: string){
    alertify.success(message)
  }
  error(message: string){
    alertify.error (message)
  }
  warning (message:string){
    alertify.warning(message)
  }
  
}
