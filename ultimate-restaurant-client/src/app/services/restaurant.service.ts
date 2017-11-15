import { Restaurant } from '../models/restaurant.model';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

import '../rsjs.operators';

@Injectable()
export class RestaurantService {
    private _api_url = 'http://localhost:3000';
    private _restaurantUrl = `${this._api_url}/api/restaurants`;

    constructor(private _http: Http) { }

    createRestaurant(restaurant: Restaurant): Observable<any> {
        return this._http.post(`${this._restaurantUrl}`, restaurant);
    }

    getRestaurants(): Observable<any> {
        return this._http.get(this._restaurantUrl)
            .map(res  => res.json());
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
