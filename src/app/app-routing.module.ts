import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosToolsComponent } from './canva/photos-tools/photos-tools.component';
import { PhotosLibComponent } from './photos/photos-lib/photos-lib.component';

const routes: Routes = [
  {path:'', component:PhotosToolsComponent},
  {path: 'photos', component: PhotosLibComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
