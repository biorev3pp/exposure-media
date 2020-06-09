import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from  '@angular/forms';
import { HmindexService } from './services/hmindex.service';

// Search Module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeindexComponent } from './homeindex/homeindex.component';
import { FilterPipe } from './filter.pipe';
import { HomeListComponent } from './home-list/home-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeindexComponent,
    FilterPipe,
    HomeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HmindexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
