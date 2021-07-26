import { Injectable } from '@angular/core';

import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  objectToHttpParams(objectToConvert: any): HttpParams {
    let httpParams = new HttpParams();
    Object.keys(objectToConvert).forEach(function (key) {
      httpParams = httpParams.append(key, objectToConvert[key]);
    });
    return httpParams;
  }
}
