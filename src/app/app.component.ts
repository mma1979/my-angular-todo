import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListItemComponent } from './components/list-item/list-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoComponent } from "./components/add-todo/add-todo.component";
import { ListItemModel } from './model/list-item-model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListItemComponent, TodoListComponent, AddTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
myTasks: ListItemModel[] = [];
itemAddedHandler($event: ListItemModel) {
  this.myTasks = [...this.myTasks, $event]
}
  
}
