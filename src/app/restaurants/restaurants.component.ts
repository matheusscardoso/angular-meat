import { RestaurantsService } from "./restaurants.service";
import { Restaurant } from "./restaurant/restaurant.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "mt-restaurants",
  templateUrl: "./restaurants.component.html",
  styles: [],
  // viewProviders:[RestaurantsService]
  // providers:[RestaurantsService]
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];

  constructor(private restaurantsService: RestaurantsService) {}

  ngOnInit() {
    this.restaurantsService
      .restaurants()
      .subscribe(
        (restaurants_response_data) =>
          (this.restaurants = restaurants_response_data)
      );
  }
}
