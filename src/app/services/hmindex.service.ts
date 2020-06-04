import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HmindexService {

  constructor(private httpClient: HttpClient) { }

  getHomeData() {
    return this.httpClient.get("http://localhost/ExposureMedia/admin/public/api/HomeHouseList");
  }

}
