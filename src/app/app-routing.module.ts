import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeindexComponent } from './homeindex/homeindex.component';
import { HomeListComponent } from './home-list/home-list.component';

const routes: Routes = [
  { path: '', component: HomeindexComponent },
  { path: 'homeList', component: HomeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
