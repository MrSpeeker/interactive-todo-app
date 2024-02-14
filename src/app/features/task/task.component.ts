import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { ITodo } from '../../models/todo.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input() public todo!: ITodo;

  @Output() public deleteEvent = new EventEmitter<number>();
  @Output() public completeEvent = new EventEmitter<ITodo>();
  @Output() public updateEvent = new EventEmitter<ITodo>();

  public busyEditing = false;

  public deleteTodoClicked() {
    this.deleteEvent.emit(this.todo.id);
  }

  public updateTodoClicked() {
    this.busyEditing = !this.busyEditing;
    this.completeEvent.emit(this.todo);
  }

  public completeTodoClicked() {
    this.todo.completed = !this.todo.completed;
    this.completeEvent.emit(this.todo);
  }

  public saveClicked() {
    this.busyEditing = !this.busyEditing;
    this.updateEvent.emit(this.todo);
  }

  public cancelClicked() {
    this.busyEditing = !this.busyEditing;
  }
}
