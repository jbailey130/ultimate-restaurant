import { Cuisine } from '../models/cuisine.model';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

import '../rsjs.operators';

@Injectable()
export class CuisineService {
    private _api_url = 'https://developers.zomato.com/api/v2.1/cuisines?city_id=288';

    constructor(private _http: Http) { }

    getCuisines(): Observable<any> {
        const headers = new Headers();
        headers.append('user-key', 'f474caceb61808b541c1a9820c328105');

        const args = {
            headers: headers
        };

        return this._http.get(this._api_url, args)
            .map(res  => res.json() );
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
