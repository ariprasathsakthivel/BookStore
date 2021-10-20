import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  postService(URL: string, payload: any, token: boolean = false, header: any = null) {
    return this.http.post(URL, payload, token && header);
  }

  getService(url: string, token: boolean = false, header: any = null) {
    return this.http.get(url, token && header);
  }
}
