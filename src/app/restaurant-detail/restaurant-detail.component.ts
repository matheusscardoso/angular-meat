import { RestaurantsService } from './../restaurants/restaurants.service'
import { Http } from '@angular/http'
import { Restaurant } from './../restaurants/restaurant/restaurant.model'
import { Component, OnInit, Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styles: []
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant;

  constructor (
    private restaurantsService: RestaurantsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit () {
    const { id } = this.activatedRoute.snapshot.params

    this.restaurantsService
      .restaurantById(id)
      .subscribe(
        (restaurant_respose) => (this.restaurant = restaurant_respose)
      )
  }
}
