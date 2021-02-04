import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subject, Subscriber } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { LoaderService } from 'src/app/loader/services/loader.service';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-photos-lib',
  templateUrl: './photos-lib.component.html',
  styleUrls: ['./photos-lib.component.css']
})
export class PhotosLibComponent implements OnInit, OnDestroy {
  subjectKey = new Subject<any>();
  data;
  pageEvent:PageEvent;
  currentPage =0;
  pageLength;
  allData = true;
  getAllPhotos;
  searchPhoto;
  obsData;

  constructor( private _http: PhotosService, public loading: LoaderService) { }
  

  ngOnInit(): void {
    this.obsData = this.subjectKey.pipe(debounceTime(500),distinctUntilChanged()).subscribe(data=>{
      this.searchPhotos(data);
    });
    this.onPageChange(this.currentPage)
  }

  onPageChange(val){
    this.getAllPhotos = this._http.getphotos(val+1,21).subscribe(data=>
    {
      this.data= [...data];
      this.pageLength = this.data.length;
    });
  }

  onKeyUp($event){
    const value = $event.target.value;
    this.subjectKey.next(value);
  }

  searchPhotos(value){
    if(value){
      this.searchPhoto = this._http.searchPhotos(1,value).subscribe(data=>{
        this.data = [...data['results']];
      })
      this.allData=false;
    }
    else{
      this.onPageChange(this.currentPage)
    }
    
  }

  ngOnDestroy(){
    this.getAllPhotos.unsubscribe();
    this.searchPhoto.unsubscribe();
    this.obsData.unsubscribe();
  }

}
