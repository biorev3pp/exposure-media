import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HmindexService {

  constructor(private httpClient: HttpClient) { }

  getHomeData() {
    return this.httpClient.get("http://localhost/ExposureMedia/admin/public/api/HomeHouseList");
  }

  getGroupFilter(): Observable<any> {
    return this.httpClient.get("http://localhost/ExposureMedia/admin/public/api/HomeHouseListFilter");
  }

  getHomesFortypeSelectedbyparameter(selectedTypeId:string): Observable<any> {
    let params1 = new HttpParams().set('homeid',selectedTypeId);
    return this.httpClient.get("http://localhost/ExposureMedia/admin/public/api/HomeHouseListFilter",{params:params1});
  }

}
