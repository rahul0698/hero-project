import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';

import {Hero} from './hero';

@Injectable()

export class HeroSearchService {

    constructor(private http: Http){}

    search(term:string): Observable<Hero[]>{
        return this.http
        .get(`app/heroes/?name=${term}`)
        .map(response =>response.json().data as Hero[]);
    }
}