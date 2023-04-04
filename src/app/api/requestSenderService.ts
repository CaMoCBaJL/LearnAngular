import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestSenderService {
  constructor(private _httpClient: HttpClient) {

  }

  sendGetRequest<T>(url: string, params: HttpParams): Observable<T> {
    const options = {
      params: params
    };

    return this._httpClient.get<T>(url, options);
  }

  sendPostRequest<T>(url: string, body: T, params: HttpParams): Observable<T> {
    const options = {
      params: params
    };

    return this._httpClient.post<T>(url, body, options);
  }

  sendPutRequest<T>(url: string, body: T, params: HttpParams): Observable<T> {
    const options = {
      params: params
    };

    return this._httpClient.put<T>(url, body, options);
  }

  sendDeleteRequest<T>(url: string, body: T, params: HttpParams): Observable<T> {
    const options = {
      params: params,
      body: body
    };

    return this._httpClient.delete<T>(url, options);
  }
}
