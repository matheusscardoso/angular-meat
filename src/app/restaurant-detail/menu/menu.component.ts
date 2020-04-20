import { Observable } from 'rxjs/Observable'
import { ActivatedRoute } from '@angular/router'
import { RestaurantsService } from './../../restaurants/restaurants.service'
import { Component, OnInit } from '@angular/core'
import { MenuItem } from '../menu-item/menu-item.model'

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {
  menu_items : Observable<MenuItem>

  constructor (private restaurantsService: RestaurantsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit () {
    const { id } = this.activatedRoute.parent.snapshot.params

    this.menu_items = this.restaurantsService.menuOfRestaurant(id)
  }

  addMenuItem(item: MenuItem){
    console.log(item)
  }
}
