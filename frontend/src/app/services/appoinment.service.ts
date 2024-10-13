import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appoinment } from './dto/Appoinment';

@Injectable({
  providedIn: 'root'
})
export class AppoinmentService {

  endpoint = "http://localhost:8080/api/appoinments";

  constructor(private httpClient: HttpClient) { }

  getAppoinment(id: any) : Observable<Appoinment>{
    return this.httpClient.get<Appoinment>(this.endpoint + `/${id}`);
  }

  getAppoinments(){
    return this.httpClient.get(this.endpoint);
  }

  delete(id:any){
    return this.httpClient.delete(`${this.endpoint}/${id}`)
  }

  create(appoinment: any){
    const headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = new URLSearchParams();
    body.append("name",appoinment.name);
    body.append("day",appoinment.day);
    body.append("time",appoinment.time);

    return this.httpClient.post(this.endpoint,body.toString(),{headers});
  }
  update(appoinment: any, id:number){
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = new URLSearchParams();
    body.append("name",appoinment.name);
    body.append("day",appoinment.day);
    body.append("time",appoinment.time);

    const updateUrl = `${this.endpoint}/${id}`;
    return this.httpClient.put(updateUrl,body.toString(),{headers});
  }
}
