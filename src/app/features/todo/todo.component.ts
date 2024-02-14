import { Component, OnInit } from '@angular/core';
import { TODO_LIST } from './todo-list';
import { TodoService } from '../../services/todo.service';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { ITodo } from '../../models/todo.interface';
import { TaskComponent } from '../task/task.component';
import { TasksToolbarComponent } from '../tasks-toolbar/tasks-toolbar.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CdkDropList, CdkDrag, TaskComponent, TasksToolbarComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  public todos: ITodo[] = TODO_LIST;

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {
    this._todoService.setTodos(this.todos);
  }

  public drop(event: CdkDragDrop<ITodo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
