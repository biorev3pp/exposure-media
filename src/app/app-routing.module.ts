import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeindexComponent } from './homeindex/homeindex.component';

const routes: Routes = [
  { path: '', component: HomeindexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
