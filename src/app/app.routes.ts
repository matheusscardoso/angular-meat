import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component'
import { HomeComponent } from './home/home.component'
import { Routes } from '@angular/router'
import { AboutComponent } from './about/about.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'

const rotas = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'restaurants',
    component: RestaurantsComponent
  },
  {
    path: 'restaurants/:id',
    component: RestaurantDetailComponent
  }
]

export const ROUTES: Routes = rotas
