import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosToolsComponent } from './photos-tools/photos-tools.component';
import { MaterialsModule } from '../materials/materials.module';
import { HttpClientModule } from '@angular/common/http';
import { LoaderModule } from '../loader/loader.module';



@NgModule({
  declarations: [PhotosToolsComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    HttpClientModule,
    LoaderModule
  ],
  providers:[
   
  ]
})
export class CanvaModule { }
