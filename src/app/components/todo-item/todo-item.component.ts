import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input()
  todo: Todo

  @Output()
  toggle = new EventEmitter<Object>();

  onToggle() {
    this.toggle.emit(this.todo);
  }
}
