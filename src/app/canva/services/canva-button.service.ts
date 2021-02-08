import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanvaButtonService {

  constructor(private _http: HttpClient) { }

  getbutton(){
    return this._http.get('https://sdk.canva.com/designbutton/v2/api.js');
  }
}
