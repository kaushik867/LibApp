import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private _service: HttpClient) { }
 
    key='yrHb7FFXKTYmPTvD7ZiX1Vca2484vy-mf13_rJMPfYc';
  getphotos(page,perPage):Observable<[]>{
    return this._service.get<[]>('https://api.unsplash.com/photos/?page='+page+'&per_page='+perPage+'&client_id='+this.key)
  }

  searchPhotos(page,query){
    return this._service.get<[]>('https://api.unsplash.com/search/photos?page='+page+'&query='+query+'&client_id='+this.key)
  }
}
