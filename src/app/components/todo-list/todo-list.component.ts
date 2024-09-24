import { Component, Input } from '@angular/core';
import { ListItemModel } from '../../model/list-item-model';
import { ListItemComponent } from "../list-item/list-item.component";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [ListItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

 @Input() list: ListItemModel[] = []

 constructor(){
  this.list = [{id: crypto.randomUUID(), description: "init frim constarctor", isComplete: false}]
 }


 removeItem($event: ListItemModel) {
  let index = this.list.indexOf($event)
  this.list.splice(index, 1)
  }
}
