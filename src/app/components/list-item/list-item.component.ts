import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListItemModel } from '../../model/list-item-model';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {

@Input() item: ListItemModel = <ListItemModel> {} // {id:''m description:'', isComplete: false}
@Output() onItemRemove : EventEmitter<ListItemModel> = new EventEmitter<ListItemModel>()

removeItem() {
  this.onItemRemove.emit(this.item)
  }
}
