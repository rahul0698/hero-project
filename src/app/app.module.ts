import { HeroSearchComponent } from './hero-search.component';
import { HeroSearchService } from './hero-search.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

@NgModule({
  imports:      [ 
    BrowserModule,
     FormsModule,
     AppRoutingModule,
     HttpModule,
     InMemoryWebApiModule.forRoot(InMemoryDataService)],
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent, HeroSearchComponent ],
  bootstrap:    [ AppComponent ],
  providers:[HeroService, HeroSearchService]
})
export class AppModule { }
