import { ComponentFixture, TestBed, inject, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';
import { RestaurantService } from './services/restaurant.service';
import { CuisineService } from './services/cuisine.service';
import { HttpModule } from '@angular/http';
import { Restaurant } from './models/restaurant.model';

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let restaurantService, cuisineService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        StarRatingModule,
        HttpModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        RestaurantService,
        CuisineService
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

    comp.ngOnInit();
    fixture.detectChanges();
  }));

  beforeEach(inject([RestaurantService, CuisineService], (r, c) => {
    restaurantService = r;
    cuisineService = c;
  }));

  it('should create the app', async(() => {
    expect(comp).toBeTruthy();
  }));

  it(`should have a new empty restaurant`, async(() => {
    expect(comp.newRestaurant).toEqual(new Restaurant());
  }));

  it('should get at least one restaurant', async(() => {
    fixture.whenStable().then( v => {
      expect(comp.restaurants.length).toBeGreaterThan(0);
    });
  }));

  it('should get at least one cuisine', async(() => {
    fixture.whenStable().then( v => {
      expect(comp.cuisines.length).toBeGreaterThan(0);
    });
  }));

});
