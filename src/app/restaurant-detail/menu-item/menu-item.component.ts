import { MenuItem } from './menu-item.model'
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import SpacePipe from '../../shared/currency-space.pipe'

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styles: []
})
export class MenuItemComponent implements OnInit {
  @Input()
  menu_item: MenuItem;

  @Output()
  add = new EventEmitter()

  constructor () { }

  ngOnInit () {
  }


  emitAddEvent(){
    this.add.emit(this.menu_item)
  }


}
