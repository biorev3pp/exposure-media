import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevsearchService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost/ExposureMedia/admin/public/api/DevelopmentSearch";
   }

  sendPostRequest(data: any): Observable<any> {
    return this.httpClient.post<any>(this.url, data);
}

  // getHomeData() {
  //   return this.httpClient.get("http://localhost/ExposureMedia/admin/public/api/DevelopmentSearch");
  // }

}
