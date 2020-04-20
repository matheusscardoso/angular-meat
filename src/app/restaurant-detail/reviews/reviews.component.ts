import { Observable } from 'rxjs/Observable'
import { RestaurantsService } from './../../restaurants/restaurants.service'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styles: []
})
export class ReviewsComponent implements OnInit {
  reviews: Observable<any>

  constructor (
    private restaurantsService: RestaurantsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit () {
    const { id } =
    this.activatedRoute.parent.snapshot.params

    this.reviews = this.restaurantsService.reviewsOfRestaurant(id)
  }
}
