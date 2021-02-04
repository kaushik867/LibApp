import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosLibComponent } from './photos-lib/photos-lib.component';
import { MaterialsModule } from '../materials/materials.module';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from '../loader/spinner/spinner.component';
import { LoaderModule } from '../loader/loader.module';



@NgModule({
  declarations: [
    PhotosLibComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    HttpClientModule,
    LoaderModule
  ],
  exports: [
    PhotosLibComponent
  ]
})
export class PhotosModule { }
