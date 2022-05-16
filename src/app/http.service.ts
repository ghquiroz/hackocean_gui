import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  get (uri: string) {
    return this.httpClient.get(uri);
  }

  post(uri: string, body: any) {
    return this.httpClient.post(uri, body);
  }
}