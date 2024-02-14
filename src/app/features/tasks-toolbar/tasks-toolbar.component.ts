import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ITodo } from '../../models/todo.interface';

@Component({
  selector: 'app-tasks-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './tasks-toolbar.component.html',
  styleUrl: './tasks-toolbar.component.scss',
})
export class TasksToolbarComponent {
  @Output() public addEvent = new EventEmitter<ITodo>();

  public addTodo() {
    // TODO: Should add a new editable todo task to the bottom of the list of todos.
    this.addEvent.emit();
  }
}
