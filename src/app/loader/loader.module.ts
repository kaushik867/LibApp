import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { MaterialsModule } from '../materials/materials.module';



@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    MaterialsModule
  ],
  exports:[
    SpinnerComponent
  ]
})
export class LoaderModule { }
