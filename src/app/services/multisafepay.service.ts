import { Injectable, ErrorHandler } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {tap} from 'rxjs/operators'
const base_url = 'https://testapi.multisafepay.com/v1/json'
const apikey="9d299614dba86d29fdaf4ff8b61f0720c8aa5209"
@Injectable({
  providedIn: 'root'
})
export class MultisafepayService {
   headers = new HttpHeaders();
  constructor(private http:HttpClient) {
    console.log(this.headers); 
   }

  getRecords(data){
    return this.http.post(`${base_url}/records`,data,{ 'headers' :{'api_key':apikey}})
  }
  getGateways(){
    // return this.http.get(`${base_url}/gateways?locale=es`,this.options)
    return this.http.get(base_url+`/gateways?locale=es`,{'headers' :{'api_key':apikey}});
  }
}
