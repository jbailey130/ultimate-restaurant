import { FormsModule } from '@angular/forms';
import { Response } from '@angular/http';
import { RestaurantService } from '../app/services/restaurant.service';
import { CuisineService } from '../app/services/cuisine.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from './models/restaurant.model';
import { Cuisine } from './models/cuisine.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  restaurants: Restaurant[];
  cuisines;

  public newRestaurant: Restaurant = new Restaurant();

  constructor(
    private _restaurantService: RestaurantService,
    private _cuisineService: CuisineService
  ) {  }

  ngOnInit(): void {
    this._restaurantService.getRestaurants().subscribe(
      r => this.restaurants = r.data.docs,
      err => console.log(err),
      () => console.log('finally AppComponent.ngOnInit.getRestaurants')
    );

    this._cuisineService.getCuisines().subscribe(
      c => this.cuisines = c.cuisines,
      err => console.log(err),
      () => console.log('finally AppComponent.ngOnInit.getCuisines')
    );
  }

  create() {
    this._restaurantService.createRestaurant(this.newRestaurant)
      .subscribe((res) => {
        this.restaurants.push(this.newRestaurant);
        this.newRestaurant = new Restaurant();
      },
      (err) => console.log(err),
      () => console.log('finally')
    );
  }

  onClick = ($event) => {
     this.newRestaurant.rating = $event.rating.toString();
  }
}
